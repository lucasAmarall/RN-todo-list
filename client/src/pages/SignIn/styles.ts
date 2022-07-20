import styled from 'styled-components/native';
import {BaseText} from '../../components/Typography';

export const SignInContainer = styled.ScrollView`
  flex: 1;
  padding: 80px 40px;
  background: white;
`;

export const SignInHeaderContainer = styled.View`
  align-items: center;
`;

export const SignInHeaderImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 100px;
`;

export const SignInHeaderLabel = styled(BaseText)`
  margin-top: 20px;
  font-weight: 700;
`;

export const SignInFormContainer = styled.View`
  margin-top: 60px;
  width: 100%;
`;

export const SignInFormTitle = styled(BaseText)`
  font-size: 18px;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
`;

export const SignInFormSubTitle = styled(BaseText)`
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
  margin: 20px 0;
`;

export const SignInInputContainer = styled.View`
  margin-bottom: 20px;
`;

export const SignInButtonContainer = styled.View`
  margin-top: 20px;
  height: 50px;
`;
