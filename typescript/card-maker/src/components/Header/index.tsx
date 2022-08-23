interface Props {
  handleLogout: () => void;
}

export default function Header({ handleLogout }: Props) {
  return (
    <header>
      <button type="button" onClick={handleLogout}>
        Loggout
      </button>
      <h1>Card Makers</h1>
    </header>
  );
}
