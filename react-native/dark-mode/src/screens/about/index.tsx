import { Text, View } from 'react-native';
import { useColorMode } from '../../common/useColorMode';

export default function About() {
  const { colorModeBg, colorModeText } = useColorMode();
  return (
    <View className={colorModeBg}>
      <Text className={colorModeText}>ewqewq</Text>
    </View>
  );
}
