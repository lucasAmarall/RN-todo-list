import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {KeyboardSpacer} from '../../components/KeyboardSpacer';
import {TodoListContainer} from '../../components/TodoList/TodoListContainer';
import {TodoListItem} from '../../components/TodoList/TodoListItem';
import {useTodo} from '../../hooks/useTodo';
import {TAB_BAR_HEIGHT} from '../../constants/TabNavigatorHeight';
import {Button} from '../../components/Button';
import {HomeContainer, HomeFooterContainer} from './styles';
import {InputRawInput} from '../../components/Input/styles';

const Home = () => {
  const [newTodo, setNewTodo] = useState('');
  const {list, create, complete} = useTodo();

  useEffect(() => {
    list.refetch();
  }, [list]);

  const createTodo = async () => {
    if (!newTodo) return;
    await create.save({description: newTodo});
    list
      .refetch()
      .then(() => {
        setNewTodo('');
      })
      .catch(() => {
        Alert.alert('There was an error, please try again');
      });
  };

  const finishTodo = (todoId: number) => {
    complete.finalize({todoId}).then(() => list.refetch());
  };

  return (
    <HomeContainer>
      <TodoListContainer
        refreshing={list.loading || create.loading}
        onRefresh={list.refetch}
        data={[...(list.data?.todosByUser.todos || [])].reverse()}
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
