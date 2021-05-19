import { InMemoryCache } from 'apollo-cache-inmemory';

let options;

export default function getClientOptions(newOptions = false) {
  if (!newOptions && options) {
    return options;
  }

  options = {
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    ssrForceFetchDelay: 100
  };

  return options;
}
