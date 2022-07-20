import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {ButtonContainer, ButtonLabel} from './styles';

interface ButtonProps {
  children: string;
  onPress: () => void;
  small?: boolean;
}
const Button: React.FC<ButtonProps> = ({children, small, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={{flex: 1}}>
      <ButtonContainer small={small}>
        <ButtonLabel>{children}</ButtonLabel>
      </ButtonContainer>
    </TouchableWithoutFeedback>
  );
};

export {Button};
