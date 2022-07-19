import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {BaseText} from '../../components/Typography';
import {useAuth} from '../../hooks/useAuth';
import {ProfileContainer} from './styles';

const Profile = () => {
  const {signOut} = useAuth();

  return (
    <ProfileContainer>
      <TouchableOpacity onPress={signOut}>
        <BaseText>
          <Text>Log Out</Text>
        </BaseText>
      </TouchableOpacity>
    </ProfileContainer>
  );
};

export {Profile};
