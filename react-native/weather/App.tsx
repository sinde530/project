import { Text, View } from 'react-native';

import { styles } from './styled';

export default function App() {
  const {container, city, cityName, weather, day, temp, description} = styles

  return (
    <View style={container}>
      <View style={city}>
        <Text style={cityName}>Seoul</Text>
      </View>

      <View style={weather}>
        <View style={day}>
          <Text style={temp}>27</Text>
          <Text style={description}>Sunny</Text>
        </View>
      </View>
    </View>
  );
}
