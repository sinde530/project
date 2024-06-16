import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View
      className={`flex-1 justify-center items-center ${
        colorScheme === 'dark' ? 'bg-black' : 'bg-white'
      }`}
    >
      <Pressable
        className="flex-1 items-center justify-center w-full h-full"
        onPress={toggleColorScheme}
      >
        <Text className={`${colorScheme === 'dark' ? 'text-white' : 'text-dark'}`}>
          {`Try clicking me! ${colorScheme} ${colorScheme === 'dark' ? '🌙' : '🌞'}`}
        </Text>
      </Pressable>

      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </View>
  );
}
