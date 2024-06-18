import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ColorSchemeContextType {
  colorScheme: string;
  toggleColorScheme: () => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const ColorSchemeProvider = ({ children }: Props) => {
  const [colorScheme, setColorScheme] = useState('light');

  useEffect(() => {
    (async () => {
      const savedScheme = await AsyncStorage.getItem('colorScheme');
      if (savedScheme) {
        setColorScheme(savedScheme);
      }
    })();
  }, []);

  const toggleColorScheme = async () => {
    const newColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(newColorScheme);
    await AsyncStorage.setItem('colorScheme', newColorScheme);
  };

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeContext;
