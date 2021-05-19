import config from './config.json';
import base from './base';

/**
 * @typedef ConfigObject
 * @type {Object}
 * @property {string} graphql_api - API endpoint for Apollo Client
 * @property {string} site_name - Site's name, used in title
 * @property {string} site_description - Site's description
 * @property {string} site_url - Site's Base URL without '/'
 * @property {string} query_page_key - Site's page data key
 */

/** @type {ConfigObject} */
const configuration = {
  ...base,
  ...config
};

export default configuration;
