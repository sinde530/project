interface IPost {
  id: number;
  text: string;
  fontSize: string;
  fontWeight: string;
  color: string;
}

interface IEditablePropertyProps {
  title: string;
  value: string;
  handlePropertyChange: (value: string) => void;
}
