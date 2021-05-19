/* eslint-disable global-require */

import { createHttpLink } from 'apollo-link-http';
import config from '../../config';

const defaultOptions = {
  link: createHttpLink({
    uri: config.graphql_api
  })
};

export function getApolloOptions(newOptions = false) {
  const target = process.env.BUILD_TARGET;

  const options = (target === 'server'
    ? require('./server')
    : require('./client')
  ).default(newOptions);

  return Object.assign({}, defaultOptions, options);
}
