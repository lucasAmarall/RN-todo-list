import React, {useEffect, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {KeyboardSpacer} from '../../components/KeyboardSpacer';
import {TodoListContainer} from '../../components/TodoList/TodoListContainer';
import {TodoListItem} from '../../components/TodoList/TodoListItem';
import {useTodo} from '../../hooks/useTodo';
import {TAB_BAR_HEIGHT} from '../../constants/TabNavigatorHeight';
import {Button} from '../../components/Button';
import {HomeContainer, HomeFooterContainer} from './styles';
import {InputRawInput} from '../../components/Input/styles';

const Home = () => {
  const listRef = useRef<FlatList | null>(null);
  const [newTodo, setNewTodo] = useState('');
  const {list, create, complete} = useTodo();

  useEffect(() => {
    list.refetch();
  }, [list]);

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
    complete.finalize({todoId}).then(() => list.refetch());
  };

  return (
    <HomeContainer>
      <TodoListContainer
        ref={listRef}
        refreshing={list.loading || create.loading || complete.loading}
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
        <View style={{flex: 0.8}}>
          <InputRawInput
            style={{height: 50}}
            placeholder="New todo"
            value={newTodo}
            onChangeText={setNewTodo}
            onSubmitEditing={createTodo}
            blurOnSubmit
          />
        </View>
        <View style={{flex: 0.2, marginLeft: 20}}>
          <Button onPress={createTodo} small>
            Add
          </Button>
        </View>
      </HomeFooterContainer>
      <KeyboardSpacer offSet={TAB_BAR_HEIGHT} />
    </HomeContainer>
  );
};

export {Home};
