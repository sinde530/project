import { Button, Text, View } from 'react-native';
import { useColorMode } from '../../common/useColorMode';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';

export default function About() {
  const { colorModeBg, colorModeText } = useColorMode();
  const navigation = useNavigation<RootStackParamList>();

  const handleClickHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View className={`flex-1 justify-center items-center ${colorModeBg}`}>
      <Text className={colorModeText}>ewqewq</Text>

      <Button title="Click To Abount Screen" onPress={handleClickHomeScreen} />
    </View>
  );
}
