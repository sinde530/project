import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['ko'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'ko';

const CustomDayComponent = ({ date, state, marking }) => {
  return (
    <View style={[styles.dayContainer, state === 'disabled' && styles.disabledDay]}>
      <Text style={[styles.dayText, state === 'today' && styles.todayText]}>{date.day}</Text>
      {marking?.texts &&
        marking.texts.map((text, index) => (
          <Text key={index} style={styles.notificationText}>
            {text}
          </Text>
        ))}
    </View>
  );
};

export default function FirstCustomCalendar() {
  return (
    <View style={styles.container}>
      <Calendar
        current={'2024-04-01'}
        minDate={'2022-01-01'}
        maxDate={'2025-12-31'}
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        monthFormat={'yyyy MM'}
        hideArrows={true}
        hideExtraDays={true}
        disableMonthChange={true}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableArrowLeft={true}
        disableArrowRight={true}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={(date) => {
          return (
            <View style={styles.header}>
              <Text style={styles.headerText}>
                {date.getFullYear()}년 {date.getMonth() + 1}월
              </Text>
            </View>
          );
        }}
        enableSwipeMonths={true}
        dayComponent={({ date, state, marking }) => (
          <CustomDayComponent date={date} state={state} marking={marking} />
        )}
        markedDates={{
          '2024-04-06': {
            selected: true,
            marked: true,
            selectedColor: 'red',
            texts: ['행사1', '행사2'],
          },
          '2024-04-15': { marked: true, dotColor: 'blue', activeOpacity: 0, texts: ['기념일'] },
        }}
        theme={{
          selectedDayBackgroundColor: 'blue',
          selectedDayTextColor: '#ffffff',
          todayTextColor: 'red',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: 'red',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dayContainer: {
    height: 70,
    alignItems: 'center',
    padding: 5,
  },
  dayText: {
    fontSize: 16,
    color: 'red',
  },
  todayText: {
    color: 'red',
  },
  disabledDay: {
    backgroundColor: '#f0f0f0',
  },
  notificationText: {
    fontSize: 12,
    color: '#555',
  },
});
