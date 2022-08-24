import styled from '@emotion/styled';

export const LoginBox = styled.div({
  width: '30rem',
  textAlign: 'center',
  backgroundColor: '#FFFFFF',
  flexDirection: 'column',
  justifyContent: 'center',
  display: 'flex',
});

export const LoginText = styled.h1({
  fontSize: '20px',
  paddingTop: '1rem',
  color: '#000000',
});

export const List = styled.ul({
  width: '100%',
  listStyle: 'none',
  // display: 'flex',
  flexDirection: 'column',
  padding: '0.5rem',
});

export const ListItem = styled.li({
  marginBottom: '0.5rem',
  padding: '1rem',
});

export const GoogleButton = styled.button({
  width: '100%',
  height: '2.5em',
  fontSize: '18px',
  borderRadius: '2rem',
  background: '#FFFFFF',
  backgroundColor: '#385461',
  color: '#000000',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#1a73e8',
    border: '2px solid #000',
  },
});

export const GitgubButton = styled.button({
  width: '100%',
  height: '2.5em',
  fontSize: '18px',
  borderRadius: '2rem',
  background: '#FFFFFF',
  backgroundColor: '#385461',
  color: '#000000',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#4c7e16',
    border: '2px solid #000',
  },
});
