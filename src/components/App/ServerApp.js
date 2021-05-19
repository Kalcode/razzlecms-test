import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ChunkExtractorManager } from '@loadable/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export function ServerApp({ client, context, extractor, url }) {
  return (
    <ChunkExtractorManager extractor={extractor}>
      <ApolloProvider client={client}>
        <StaticRouter context={context} location={url}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    </ChunkExtractorManager>
  );
}
