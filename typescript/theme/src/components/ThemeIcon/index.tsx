import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import { Icon, IconBox } from './styled';

interface Props {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function ThemeIcon({ isDarkMode, toggleDarkMode }: Props) {
  return (
    <IconBox>
      <Icon onClick={() => toggleDarkMode()}>
        {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </Icon>
    </IconBox>
  );
}
