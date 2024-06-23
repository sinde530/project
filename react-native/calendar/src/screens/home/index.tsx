import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';

export default function Home() {
  const navigation = useNavigation<RootStackParamList>();

  const handleClickAboutScreen = () => {
    navigation.navigate('TutorialCalendar');
  };

  return (
    <View className={`flex-1 justify-center items-center`}>
      <Button title="Click To Abount Screen" onPress={handleClickAboutScreen} />

      <StatusBar style="dark" />
    </View>
  );
}
