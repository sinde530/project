import styled from '@emotion/styled';

const Container = styled.footer({
  width: '100%',
  backgroundColor: '#385461',
  textAlign: 'center',
  padding: '1px',
});

const Title = styled.p({
  color: '#000000',
  fontSize: '24px',
});

export default function Footer() {
  return (
    <Container>
      <Title>code your Crong's</Title>
    </Container>
  );
}
