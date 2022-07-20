import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TodoListItemContainer} from './styles';

interface ITodoListItemProps {
  id: string;
  complete: boolean;
  createdAt: Date;
  description: string;
  onPress: () => void;
}

const TodoListItem: React.FC<ITodoListItemProps> = ({
  description,
  complete,
  onPress,
}) => {
  return (
    <TodoListItemContainer>
      <BouncyCheckbox
        disableBuiltInState
        isChecked={complete}
        size={25}
        bounceEffect={1}
        style={{borderRadius: 8}}
        fillColor="rgba(0,0,0,.5)"
        unfillColor="#FFFFFF"
        text={description}
        // eslint-disable-next-line react-native/no-inline-styles
        textContainerStyle={{
          padding: 20,
          width: '100%',
        }}
        onPress={onPress}
      />
    </TodoListItemContainer>
  );
};

export {TodoListItem};
