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

interface ITodoListContainerProps extends FlatListProps<ITodo> {}

const TodoListContainer: React.FC<ITodoListContainerProps> = React.forwardRef(
  (props, ref) => {
    return (
      <FlatList
        {...props}
        ref={ref}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    );
  },
);

export {TodoListContainer};
