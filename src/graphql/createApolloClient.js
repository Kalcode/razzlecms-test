import ApolloClient from 'apollo-client';
import { getApolloOptions } from './options';

let client;

export function createApolloClient(newClient = false) {
  client = new ApolloClient(getApolloOptions(newClient));
  return client;
}
