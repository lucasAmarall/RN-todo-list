import styled from 'styled-components/native';
import {BaseText} from '../Typography';

interface IButtonContainerProps {
  small: boolean;
}
export const ButtonContainer = styled.View`
  background-color: rgba(231, 105, 110, 1);
  padding: ${({small}: IButtonContainerProps) => (small ? 8 : 16)}px;
  border-radius: 16px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled(BaseText)`
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  text-align: center;
`;
