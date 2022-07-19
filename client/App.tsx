import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {GlobalProvider} from './src/context/globalContext';
import {Router} from './src/router';
import {apolloClient} from './src/services/apollo';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  </ApolloProvider>
);

export {App};
