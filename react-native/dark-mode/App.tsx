import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeProvider } from './src/provider/ColorSchemeContext';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ColorSchemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ColorSchemeProvider>
  );
}
