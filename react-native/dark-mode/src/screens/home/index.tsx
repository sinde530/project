import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { useColorSchemeContext } from '../../provider/ColorSchemeContext';
import { useColorMode } from '../../common/useColorMode';

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
