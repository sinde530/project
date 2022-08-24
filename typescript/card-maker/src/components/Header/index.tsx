import styled from '@emotion/styled';

const Container = styled.header({
  width: '100%',
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#385461',
  position: 'relative',
});

const LogoutButton = styled.button({
  position: 'absolute',
  top: '0.2rem',
  right: '2.4rem',
  padding: '0.8rem',
  borderRadius: '20%',
  backgroundColor: '#000000',
  color: '#FFFFFF',
  border: '0',
  cursor: 'pointer',
  '&:hover': {
    transition: '0.4s',
    backgroundColor: '#385461',
    color: '#FFFFFF',
  },
});

const Title = styled.h1({
  margin: '0',
  color: '#FFFFFF',
});

interface Props {
  handleLogout: () => void;
}

export default function Header({ handleLogout }: Props) {
  return (
    <Container>
      <LogoutButton type="button" onClick={handleLogout}>
        Loggout
      </LogoutButton>
      <Title>Business Card Makers</Title>
    </Container>
  );
}
