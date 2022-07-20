import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQHRlc3QuY29tIiwiaWF0IjoxNjU4MjkyMDM4LCJleHAiOjE2NTgyOTU2Mzh9.9feCsJsytRIjPF0_4AWHVTcna_9w-gwoA9cALYc_LIA`,
    },
  };
});

// Initialize Apollo Client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export {apolloClient};
