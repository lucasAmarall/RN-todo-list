import React from 'react';
import {FlatList, FlatListProps, View} from 'react-native';

interface ITodo {
  id: string;
  complete: boolean;
  createdAt: Date;
  description: string;
}

const Separator = () => (
  <View
    style={{width: '100%', backgroundColor: 'rgba(0,0,0,0.5)', height: 1}}
  />
);

const TodoListContainer: React.FC<FlatListProps<ITodo>> = props => {
  return (
    <FlatList
      {...props}
      ItemSeparatorComponent={Separator}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
    />
  );
};

export {TodoListContainer};
