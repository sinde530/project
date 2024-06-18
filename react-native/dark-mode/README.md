This project was bootstrapped with Create React Native App.

Below you'll find information about performing common tasks. The most recent version of this guide is available here.

## The library I used

```json
// tailwind

yarn add --dev tailwindcss autoprefixer
npx tailwindcss init

yarn add --dev tailwindcss@3.3.2

yarn add nativewind

// navigation
yarn add @react-navigation/native @react-navigation/stack react-native-safe-area-context react-native-gesture-handler
```

## Screen Issue

```typescript
// src/types/navigation.d.ts

export type RootStackParamList = {
  navigate(arg0: string): unknown;
  Home: undefined;
  About: undefined;
};
```

## Color Provider

```typescript
//src/provider/ColorSchemeContext.tsx
import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ColorSchemeContextType {
  colorScheme: string;
  toggleColorScheme: () => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined);

export const useColorSchemeContext = () => {
  const context = useContext(ColorSchemeContext);
  if (!context) {
    throw new Error('useColorSchemeContext must be used within a ColorSchemeProvider');
  }
  return context;
};

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
```

## Used App.tsx

```typescript
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeProvider } from './src/provider/ColorSchemeContext';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/home';
import About from './src/screens/about';
import { RootStackParamList } from './src/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ColorSchemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </ColorSchemeProvider>
  );
}
```

## Used Screen For Example

```typescript
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Button } from 'react-native';
import { useColorSchemeContext } from '../../provider/ColorSchemeContext';
import { useColorMode } from '../../common/useColorMode';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';

export default function Home() {
  const { colorScheme, toggleColorScheme } = useColorSchemeContext();
  const { colorModeBg, colorModeText } = useColorMode();

  return (
    <View className={`flex-1 justify-center items-center ${colorModeBg}`}>
      <Pressable
        className="flex-1 items-center justify-center w-full h-full"
        onPress={toggleColorScheme}
      >
        <Text className={colorModeText}>
          {`Try clicking me! ${colorScheme} ${colorScheme === 'dark' ? '🌙' : '🌞'}`}
        </Text>
      </Pressable>

      <StatusBar style={colorScheme === 'dark' ? 'dark' : 'dark'} />
    </View>
  );
}
```
