import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {Button} from '../../components/Button';
import {PasswordInput, TextInput} from '../../components/Input';
import {useAuth} from '../../hooks/useAuth';
import {
  SignInContainer,
  SignInHeaderImage,
  SignInHeaderContainer,
  SignInHeaderLabel,
  SignInFormContainer,
  SignInFormTitle,
  SignInFormSubTitle,
  SignInInputContainer,
  SignInButtonContainer,
} from './styles';

const assets = {
  logo: require('../../assets/logo.png'),
};

const SignIn = () => {
  const signInAuth = useAuth();

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const signIn = () => {
    signInAuth.signIn(formState);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <SignInContainer>
        <SignInHeaderContainer>
          <SignInHeaderImage source={assets.logo} />
          <SignInHeaderLabel>Company Name</SignInHeaderLabel>
        </SignInHeaderContainer>
        <SignInFormContainer>
          <SignInFormTitle>Sign In</SignInFormTitle>
          <SignInFormSubTitle>
            Hi there! Nice to see you again.
          </SignInFormSubTitle>
          <SignInInputContainer>
            <TextInput
              autoComplete="email"
              autoCapitalize="none"
              keyboardType="email-address"
              label="Email"
              placeholder="Email"
              value={formState.email}
              onChangeText={email => setFormState(state => ({...state, email}))}
            />
          </SignInInputContainer>
          <SignInInputContainer>
            <PasswordInput
              label="Password"
              placeholder="Password"
              value={formState.password}
              onChangeText={password =>
                setFormState(state => ({...state, password}))
              }
            />
          </SignInInputContainer>
          <SignInFormSubTitle>
            {signInAuth?.error?.message || ' '}
          </SignInFormSubTitle>
          <SignInButtonContainer>
            <Button onPress={signIn}>Sign in</Button>
          </SignInButtonContainer>
        </SignInFormContainer>
      </SignInContainer>
    </KeyboardAvoidingView>
  );
};

export {SignIn};
