import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { useColorSchemeContext } from '../../provider/ColorSchemeContext';

export default function Home() {
  const { colorScheme, toggleColorScheme } = useColorSchemeContext();
  const colorModeBg = colorScheme === 'dark' ? 'bg-black' : 'bg-white';
  const colorModeText = colorScheme === 'dark' ? 'text-white' : 'text-black';

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
