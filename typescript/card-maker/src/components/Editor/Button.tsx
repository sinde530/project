import styled from '@emotion/styled';

const VariousButton = styled.button({
  width: '100%',
  border: '0',
  padding: '0.5rem',
  borderBottom: '1px solid #000000',
  borderRight: '1px solid #000000',
  background: '#FFFFFF',
  color: '#000000',
  flex: '1 1 30%',
});

interface Props {
  name: string;
  onSubmit: (cards: any) => void;
}

export default function Button({ name, onSubmit }: Props) {
  return <VariousButton onSubmit={onSubmit}>{name}</VariousButton>;
}
