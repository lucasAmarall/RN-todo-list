import {useMutation, useQuery} from '@apollo/client';
import {
  COMPLETE_TODO_MUTATION,
  CREATE_TODO_MUTATION,
} from '../graphql/mutations';
import {GET_USER_TODOS} from '../graphql/queries';

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
  const list = useQuery<IUserTodosRes>(GET_USER_TODOS, {
    onError: e => console.log(e),
  });

  const [createTodo, creationInfo] = useMutation<ICreateTodoInput>(
    CREATE_TODO_MUTATION,
    {
      onError: e => console.log(JSON.stringify(e, null, 2)),
    },
  );

  const [completeTodo, completeInfo] = useMutation<ICompleteTodoInput>(
    COMPLETE_TODO_MUTATION,
    {
      onError: e => console.log(JSON.stringify(e, null, 2)),
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
