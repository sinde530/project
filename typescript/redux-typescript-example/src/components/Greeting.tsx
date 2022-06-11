type GreetingProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
};

export default function Greeting({
  name,
  mark,
  optional,
  onClick,
}: GreetingProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      <h1>
        Hello {name}
        {mark}
        {optional && <p>{optional}</p>}
      </h1>
      <div>
        <button type="button" onClick={handleClick}>
          Click
        </button>
      </div>
    </div>
  );
}

Greeting.defaultProps = {
  optional: "",
};
