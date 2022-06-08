import { render } from 'react-dom';

export default function Numbers({ number }) {
  const ClickNumber = (value) => {
    render({ number: value });
  };

  return (
    <>
      <p>{number}</p>

      {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => (
        <button type="button" onClick={() => ClickNumber}>{i}</button>
      ))
  }
    </>
  );
}
