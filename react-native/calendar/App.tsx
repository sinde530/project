import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './src/types/navigation';
import Home from './src/screens/home';
import TutorialCalendar from './src/screens/tutorial_calender';
import FirstCustomCalendar from './src/screens/FirstCustomCalendar';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TutorialCalendar" component={TutorialCalendar} />
        <Stack.Screen name="FirstCustomCalendar" component={FirstCustomCalendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
