import React, {useRef} from 'react';
import {Animated, TextInputProps} from 'react-native';
import {
  InputContainer,
  InputLabel,
  InputRawInput,
  InputLabelContainer,
} from '../styles';

interface ITextInputProps extends TextInputProps {
  label: string;
}

const TextInput: React.FC<ITextInputProps> = ({label, ...rest}) => {
  const position = useRef(new Animated.Value(0)).current;

  const translateY = position.interpolate({
    inputRange: [0, 1],
    outputRange: [34, 0],
  });

  const labelFontSize = position.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 14],
  });

  const onFocus = () => {
    Animated.timing(position, {
      duration: 300,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    if (rest.value) return;

    Animated.timing(position, {
      duration: 300,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  return (
    <InputContainer>
      <InputLabelContainer style={{transform: [{translateY}]}}>
        <InputLabel style={{fontSize: labelFontSize}}>{label}</InputLabel>
      </InputLabelContainer>
      <InputRawInput
        {...rest}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder=""
      />
    </InputContainer>
  );
};

export {TextInput};
