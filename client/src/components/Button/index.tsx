import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {ButtonContainer, ButtonLabel} from './styles';

interface ButtonProps {
  children: string;
  onPress: () => void;
}
const Button: React.FC<ButtonProps> = ({children, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={{flex: 1}}>
      <ButtonContainer>
        <ButtonLabel>{children}</ButtonLabel>
      </ButtonContainer>
    </TouchableWithoutFeedback>
  );
};

export {Button};
