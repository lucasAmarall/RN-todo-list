import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import useGlobalState from '../hooks/useGlobalState';

const useApolloClient = () => {
  const {token} = useGlobalState();

  const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql',
  });

  const authLink = setContext((_, {headers}) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  // Initialize Apollo Client
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return {apolloClient};
};
export {useApolloClient};
