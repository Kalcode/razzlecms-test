import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createApolloClient } from '../src/graphql/createApolloClient';

const client = createApolloClient();

export default function StoryApollo(storyFunc) {
  return <ApolloProvider client={client}>{storyFunc()}</ApolloProvider>;
}
