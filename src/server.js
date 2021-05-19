import 'isomorphic-fetch';

import React from 'react';
import { ChunkExtractor } from '@loadable/server';
import { getDataFromTree } from '@apollo/react-ssr';
import { Helmet } from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import express from 'express';
import path from 'path';

import { Html } from './Html';
import { createApolloClient } from './graphql/createApolloClient';
import { ServerApp } from './components/App/ServerApp';
import createSitemap from './helpers/server/createSitemap';

createSitemap(createApolloClient(true));

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/webhooks/sitemap', async (req, res) => {
    const client = createApolloClient(true);

    await createSitemap(client);

    res.status(200).send('sitemap.xml updated');
  })
  .get('/*', (req, res) => {
    const client = createApolloClient(true);

    const context = {};

    // Grab Split Bundle
    const statsFile = path.resolve('./build/loadable-stats.json');

    const extractor = new ChunkExtractor({
      statsFile,
      entrypoints: ['client']
    });

    // Mount Application
    const Application = (
      <ServerApp
        client={client}
        context={context}
        extractor={extractor}
        url={req.url}
      />
    );

    // Apollo SSR
    getDataFromTree(Application)
      .then(() => {
        if (context.url) {
          res.redirect(context.url);
          return;
        }

        const initialState = client.extract();

        // Extract script, style and link tags
        const scriptTags = extractor.getScriptElements({ crossOrigin: 'true' });
        const linkTags = extractor.getLinkElements({ crossOrigin: 'true' });
        const styleTags = extractor.getStyleElements({ crossOrigin: 'true' });

        // Server Side Render - Styled Components CSS Sheet
        const sheet = new ServerStyleSheet();
        const content = renderToString(sheet.collectStyles(Application));
        sheet.seal();

        // Helmet Information
        const helmet = Helmet.renderStatic();

        // Create HTML
        const html = (
          <Html
            helmet={helmet}
            content={content}
            linkTags={linkTags}
            scriptTags={scriptTags}
            state={initialState}
            styleTags={styleTags.concat(sheet.getStyleElement())}
          />
        );

        // Send HTML to requester
        res.status(200);
        res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
        res.end();
      })
      .catch(() => {
        res.status(200);
        res.send(
          '<!doctype html>\n<html><body>404 - Internal Server Error </body></html>'
        );
        res.end();
      });
  });

export default server;
