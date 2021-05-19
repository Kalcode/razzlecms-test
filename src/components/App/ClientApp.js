import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { createApolloClient } from '../../graphql/createApolloClient';
import App from './App';

const client = createApolloClient();

export default function ClientApp() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  );
}
