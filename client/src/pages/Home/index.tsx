import React, {useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {KeyboardSpacer} from '../../components/KeyboardSpacer';
import {TodoListContainer} from '../../components/TodoList/TodoListContainer';
import {TodoListItem} from '../../components/TodoList/TodoListItem';
import {useTodo} from '../../hooks/useTodo';
import {TAB_BAR_HEIGHT} from '../../constants/TabNavigatorHeight';
import {Button} from '../../components/Button';
import {
  HomeContainer,
  HomeFooterButtonContainer,
  HomeFooterContainer,
  HomeFooterInput,
  HomeFooterInputContainer,
} from './styles';

const Home = () => {
  const listRef = useRef<FlatList | null>(null);
  const [newTodo, setNewTodo] = useState('');
  const {list, create, complete} = useTodo();

  const createTodo = () => {
    if (!newTodo) return;
    create.save({description: newTodo}).then(() => {
      list.refetch().then(() => {
        setTimeout(() => {
          setNewTodo('');
          listRef?.current?.scrollToEnd({
            animated: true,
          });
        }, 300);
      });
    });
  };

  const finishTodo = (todoId: number) => {
    complete.finalize({todoId});
  };

  return (
    <HomeContainer>
      <TodoListContainer
        ref={listRef}
        refreshing={list.loading || create.loading}
        onRefresh={list.refetch}
        data={list.data?.todosByUser.todos}
        renderItem={({item}) => {
          return (
            <TodoListItem
              {...item}
              onPress={() => finishTodo(Number(item.id))}
            />
          );
        }}
      />
      <HomeFooterContainer>
        <HomeFooterInputContainer>
          <HomeFooterInput
            placeholder="New todo"
            value={newTodo}
            onChangeText={setNewTodo}
            onSubmitEditing={createTodo}
            blurOnSubmit
          />
        </HomeFooterInputContainer>
        <HomeFooterButtonContainer>
          <Button onPress={createTodo} small>
            Add
          </Button>
        </HomeFooterButtonContainer>
      </HomeFooterContainer>
      <KeyboardSpacer />
    </HomeContainer>
  );
};

export {Home};
