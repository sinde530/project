import { useColorSchemeContext } from '../provider/ColorSchemeContext';

export const useColorMode = () => {
  const { colorScheme } = useColorSchemeContext();

  const colorModeBg = colorScheme === 'dark' ? 'bg-black' : 'bg-white';
  const colorModeText = colorScheme === 'dark' ? 'text-white' : 'text-black';

  return { colorModeBg, colorModeText };
};
