import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

import config from '../../config';
import sitemapQuery from '../../graphql/queries/sitemap.gql';

let sitemap;

export function getSitemap() {
  return sitemap;
}
export default async function createSitemap(client) {
  const { data, error } = await client.query({
    query: sitemapQuery
  });

  if (error) {
    console.error(error);
    throw new Error(error);
  }

  const paths = data.nodeQuery.entities
    .filter(item => item.entityUrl.path.indexOf('/node') === -1)
    .map(item => item.entityUrl.path);

  const smStream = new SitemapStream({ hostname: config.site_url });
  // const pipeline = smStream.pipe(createGzip());

  paths.forEach(url => {
    smStream.write({ url });
  });

  smStream.end();

  try {
    sitemap = await streamToPromise(smStream);
  } catch (thrownError) {
    console.error(thrownError);
    throw new Error(thrownError);
  }

  fs.writeFile(`${__dirname}/public/sitemap.xml`, sitemap.toString(), () => {
    console.info('Updated Sitemap');
  });
}
