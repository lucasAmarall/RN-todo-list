import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {BaseText} from '../../components/Typography';
import {ProfileContainer} from './styles';

const Profile = () => {
  const logOut = () => alert('logOut');
  return (
    <ProfileContainer>
      <TouchableOpacity onPress={logOut}>
        <BaseText>
          <Text>Log Out</Text>
        </BaseText>
      </TouchableOpacity>
    </ProfileContainer>
  );
};

export {Profile};
