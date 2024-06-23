import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';

export default function Home() {
  const navigation = useNavigation<RootStackParamList>();

  const handleClickTutorialCalendarScreen = () => {
    navigation.navigate('TutorialCalendar');
  };

  const handleClickFirstCustomCalendarScreen = () => {
    navigation.navigate('FirstCustomCalendar');
  };

  return (
    <View className={`flex-1 justify-center items-center`}>
      <Button title="Tutorial Calendar Screen" onPress={handleClickTutorialCalendarScreen} />

      <Button title="First Custom Calendar Screen" onPress={handleClickFirstCustomCalendarScreen} />

      <StatusBar style="dark" />
    </View>
  );
}
