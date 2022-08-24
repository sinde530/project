import styled from '@emotion/styled';

export const Container = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#ffd43b',
  marginBottom: '0.5rem',
  borderRadius: '1rem',
  padding: '0.2rem 0',
  boxShadow: '6px 6px 8px 0 rgba(217, 217, 217, 1)',
  maxWidth: '30rem',
  '&:dark': {
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
  '&:light': {
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  '&:colorful': {
    backgroundColor:
      'inear-gradient(166deg, rgba(237, 193, 211, 1) 0%, rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)',
    color: '#FFFFFF',
  },
});

export const Avatar = styled.img({
  width: '10rem',
  height: '10rem',
  padding: '1rem',
  margin: '0 0.5rem 0 1rem',
  borderRadius: '50%',
});

export const Information = styled.div({
  width: '100%',
});

export const NameField = styled.h1({
  margin: '0',
  fontSize: '20px',
  marginBottom: '0.2rem',
});

export const CompanyField = styled.h1({
  margin: '0',
  fontSize: '20px',
  marginBottom: '1rem',
  '& :after': {
    display: 'block',
    width: '90%',
    height: '2px',
    backgroundColor: '#FFFFFF',
    transform: 'translateY(0.5rem)',
  },
});

export const TitleField = styled.p({
  margin: '0',
  fontSize: '20px',
  marginBottom: '0.2rem',
});
export const EmailField = styled.p({
  margin: '0',
  fontSize: '20px',
  marginBottom: '0.2rem',
});
export const MessageField = styled.p({
  margin: '0',
  fontSize: '20px',
  marginBottom: '0.2rem',
});
