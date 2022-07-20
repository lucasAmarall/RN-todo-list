import {gql} from '@apollo/client';

export const USER_LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      accessToken
    }
  }
`;

export const CREATE_TODO_MUTATION = gql`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      createdAt
      description
      complete
    }
  }
`;

export const COMPLETE_TODO_MUTATION = gql`
  mutation SetTodoComplete($input: SetTodoCompleteInput!) {
    setTodoComplete(input: $input) {
      id
      complete
    }
  }
`;
