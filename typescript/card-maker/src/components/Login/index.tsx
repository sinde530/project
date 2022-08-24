import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  LoginBox,
  LoginText,
  List,
  ListItem,
  GoogleButton,
  GitgubButton,
} from './styled';

interface Props {
  authService: any;
}
export default function Login({ authService }: Props) {
  const navigate = useNavigate();

  const goToMaker = (userId: any) => {
    navigate('/maker', userId);
    localStorage.getItem('Key');
    console.log(userId);
  };

  const handleLogin = (e: any) => {
    authService //
      .login(e.currentTarget.textContent)
      .then((data: any) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService //
      .onAuthChange((user: { id: any }) => {
        user && goToMaker(user.id);
      });
  });

  return (
    <LoginBox>
      <LoginText>Social Login Pages</LoginText>
      <List>
        <ListItem>
          <GoogleButton type="button" onClick={handleLogin}>
            Google
          </GoogleButton>
        </ListItem>
        <ListItem>
          <GitgubButton type="button" onClick={handleLogin}>
            Github
          </GitgubButton>
        </ListItem>
      </List>
    </LoginBox>
  );
}
