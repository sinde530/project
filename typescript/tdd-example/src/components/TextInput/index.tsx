import { useRecoilState } from "recoil";

import textState from "../../states/textState";

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChangeHandle = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChangeHandle} />
      <br />
      Echo : {text}
    </div>
  );
}
