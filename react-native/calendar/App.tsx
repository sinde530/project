import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function App() {
  const nowData = new Date();
  console.log(nowData.toString());
  return (
    <View style={styles.container}>
      <View style={styles.calenderView}>
        <Calendar
          current={nowData.toString()}
          onDayPress={(day) => console.log('선택한 날', day)}
          onVisibleMonthsChange={(months) => {
            console.log('now these months are visible', months);
          }}
          pastScrollRange={50}
          futureScrollRange={50}
          scrollEnabled={true}
          showScrollIndicator={true}
        />
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'purple',
  },
  calenderView: {
    // flex: 1,
    // height: '100%',
  },
});
