import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});

// Initialize Apollo Client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export {apolloClient};
