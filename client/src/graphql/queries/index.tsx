import {gql} from '@apollo/client';

export const GET_USER_TODOS = gql`
  query GetUserTodos {
    todosByUser {
      id
      email
      todos {
        id
        createdAt
        description
        complete
      }
    }
  }
`;
