import React, {useState} from 'react';
import {TextInputProps, TouchableWithoutFeedback} from 'react-native';
import {TextInput} from '../TextInput';
import {
  PasswordInputContainer,
  PasswordInputToggleButton,
  PasswordInputToggleButtonContainer,
} from './styles';

interface IPasswordInputProps extends TextInputProps {
  label: string;
}

const assets = {
  outline_eye: require('../../../assets/outline_eye_icon.png'),
  filled_eye: require('../../../assets/filled_eye_icon.png'),
};

const PasswordInput: React.FC<IPasswordInputProps> = props => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisibility(v => !v);

  return (
    <PasswordInputContainer>
      <TextInput secureTextEntry={!passwordVisibility} {...props} />

      <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
        <PasswordInputToggleButtonContainer>
          <PasswordInputToggleButton
            source={passwordVisibility ? assets.filled_eye : assets.outline_eye}
          />
        </PasswordInputToggleButtonContainer>
      </TouchableWithoutFeedback>
    </PasswordInputContainer>
  );
};

export {PasswordInput};
