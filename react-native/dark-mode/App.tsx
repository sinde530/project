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
