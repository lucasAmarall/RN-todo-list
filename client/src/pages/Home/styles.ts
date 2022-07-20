import styled from 'styled-components/native';
import {InputRawInput} from '../../components/Input/styles';

export const HomeContainer = styled.View`
  flex: 1;
  background: white;
`;

export const HomeFooterContainer = styled.View`
  width: 100%;
  padding: 8px 16px;
  height: 50px;
  flex-direction: row;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const HomeFooterInputContainer = styled.View`
  flex: 0.7;
  flex-direction: column;
  align-item: center
  width: 100%;
`;

export const HomeFooterInput = styled(InputRawInput)`
  height: 50px;
`;

export const HomeFooterButtonContainer = styled.View`
  flex: 0.3;
  margin-left: 20px;
`;
