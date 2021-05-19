import { InMemoryCache } from 'apollo-cache-inmemory';

let options;

export default function getServerOptions(newOptions = false) {
  if (!newOptions && options) {
    return options;
  }

  options = {
    cache: new InMemoryCache(),
    ssrMode: true
  };

  return options;
}
