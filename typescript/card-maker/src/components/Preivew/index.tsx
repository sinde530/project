import styled from '@emotion/styled';
import Card from 'src/components/Card';

const Container = styled.div({
  flexBasis: '50%',
  backgroundColor: '#F5DEB3',
  padding: '0.5rem 2rem',
});

const Title = styled.h1({
  width: '100%',
  textAlign: 'center',
  color: '#385461',
  marginBottom: '1rem',
});

const Cards = styled.ul({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

interface Props {
  cards: any;
}

export default function Preivew({ cards }: Props) {
  return (
    <Container>
      <Title>Card PreView</Title>

      <Cards>
        {Object.keys(cards).map((key) => (
          <Card key={key} cards={cards[key]} />
        ))}
      </Cards>
    </Container>
  );
}
