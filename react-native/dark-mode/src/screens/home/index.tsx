import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Button } from 'react-native';
import { useColorSchemeContext } from '../../provider/ColorSchemeContext';
import { useColorMode } from '../../common/useColorMode';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';

export default function Home() {
  const { colorScheme, toggleColorScheme } = useColorSchemeContext();
  const { colorModeBg, colorModeText } = useColorMode();
  const navigation = useNavigation<RootStackParamList>();

  const handleClickAboutScreen = () => {
    navigation.navigate('About');
  };

  return (
    <View className={`flex-1 justify-center items-center ${colorModeBg}`}>
      <Pressable
        className="flex-1 items-center justify-center w-full h-full"
        onPress={toggleColorScheme}
      >
        <Text className={colorModeText}>
          {`Try clicking me! ${colorScheme} ${colorScheme === 'dark' ? '🌙' : '🌞'}`}
        </Text>

        <Button title="Click To Abount Screen" onPress={handleClickAboutScreen} />
      </Pressable>

      <StatusBar style={colorScheme === 'dark' ? 'dark' : 'dark'} />
    </View>
  );
}
