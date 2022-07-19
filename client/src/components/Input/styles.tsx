import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {AnimatedBaseText} from '../Typography';

export const InputContainer = styled.View`
  position: relative;
`;

export const InputLabelContainer = styled(Animated.View)``;

export const InputLabel = styled(AnimatedBaseText)`
  color: rgba(231, 105, 110, 1);
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 14px;
  letter-spacing: 0;
`;

export const InputRawInput = styled.TextInput`
  letter-spacing: 0;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.4)
  font-size: 16px;
  padding-bottom: 6px;
`;
