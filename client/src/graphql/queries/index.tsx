import {gql} from '@apollo/client';

export const GET_USER_TODOS = gql`
  query GetUserTodos {
    todosByUser {
      todos {
        id
        createdAt
        description
        complete
      }
    }
  }
`;
