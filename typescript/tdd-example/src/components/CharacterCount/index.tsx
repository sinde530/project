import { useRecoilValue } from "recoil";

import charCountState from "../../states/charCountState";

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count : {count}</>;
}
