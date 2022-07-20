import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import useGlobalState from '../hooks/useGlobalState';

const useApolloClient = () => {
  const {token} = useGlobalState();

  const httpLink = new HttpLink({
    // FOR ANDROID
    // uri: 'http://10.0.2.2:3000/graphql',
    // FOR IOS
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
