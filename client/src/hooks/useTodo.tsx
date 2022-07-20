import {useMutation, useQuery} from '@apollo/client';
import {
  COMPLETE_TODO_MUTATION,
  CREATE_TODO_MUTATION,
} from '../graphql/mutations';
import {GET_USER_TODOS} from '../graphql/queries';
import {useAuth} from './useAuth';

interface ITodo {
  id: string;
  complete: boolean;
  createdAt: Date;
  description: string;
}

interface IUserTodosRes {
  todosByUser: {
    __typename: string;
    todos: ITodo[];
  };
}

interface ICreateTodoInput {
  description: string;
}

interface ICompleteTodoInput {
  todoId: number;
}

const useTodo = () => {
  const {statusCodeMiddleware} = useAuth();
  const list = useQuery<IUserTodosRes>(GET_USER_TODOS, {
    onError: statusCodeMiddleware,
  });

  const [createTodo, creationInfo] = useMutation<ICreateTodoInput>(
    CREATE_TODO_MUTATION,
    {
      onError: statusCodeMiddleware,
    },
  );

  const [completeTodo, completeInfo] = useMutation<ICompleteTodoInput>(
    COMPLETE_TODO_MUTATION,
    {
      onError: statusCodeMiddleware,
    },
  );

  const save = (input: ICreateTodoInput) => {
    return createTodo({
      variables: {
        input,
      },
    });
  };

  const finalize = (input: ICompleteTodoInput) => {
    return completeTodo({
      variables: {
        input,
      },
    });
  };

  return {
    list,
    create: {
      save,
      ...creationInfo,
    },
    complete: {
      finalize,
      ...completeInfo,
    },
  };
};

export {useTodo};
