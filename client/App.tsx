import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {GlobalProvider} from './src/context/globalContext';
import {Router} from './src/router';
import {useApolloClient} from './src/services/apollo';

const RenderApolloProvider = () => {
  const {apolloClient} = useApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
  );
};

const App = () => {
  return (
    <GlobalProvider>
      <RenderApolloProvider />
    </GlobalProvider>
  );
};
export {App};
