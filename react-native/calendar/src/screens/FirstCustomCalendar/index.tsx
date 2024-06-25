import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { CustomMarkingProps } from '../../types/marking';

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

const noticeModkData: { [key: string]: CustomMarkingProps } = {
  '2024-04-06': {
    selected: true,
    marked: true,
    selectedColor: 'red',
    texts: ['행사1', '행사2'],
  },
  '2024-04-15': { marked: true, dotColor: 'blue', activeOpacity: 0, texts: ['기념일'] },
  '2024-06-24': {
    marked: true,
    dotColor: 'blue',
    activeOpacity: 0,
    texts: ['배고파', '밥먹자', '이스포츠 아카데미', '가나다라마바ㅏ아자차카'],
  },
  '2024-06-25': {
    marked: true,
    dotColor: 'blue',
    activeOpacity: 0,
    texts: ['배고파'],
  },
  '2024-06-26': {
    marked: true,
    dotColor: 'blue',
    activeOpacity: 0,
    texts: ['캘린더 테스트'],
  },
};

interface CustomDayComponentProps {
  date: any;
  state?: string;
  marking: CustomMarkingProps;
}

const CustomDayComponent = ({ date, state, marking }: CustomDayComponentProps) => {
  return (
    <TouchableOpacity
      style={[styles.dayContainer, state === 'disabled' && styles.disabledDay]}
      onPress={() => alert(JSON.stringify(date))}
      // onPress={() => console.log('selected day', date)}
    >
      <Text style={[styles.dayText, state === 'today' && styles.todayText]}>{date.day}</Text>
      {marking?.texts &&
        marking.texts.map((text: string, index: number) => (
          <Text key={index} style={styles.notificationText} numberOfLines={1} ellipsizeMode="tail">
            {text}
          </Text>
        ))}
    </TouchableOpacity>
  );
};

const CustomHeaderComponent = ({ date }: any) => {
  const formattedDate = new Date(date);
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {formattedDate.getFullYear()}년 {formattedDate.getMonth() + 1}월
      </Text>
    </View>
  );
};

export default function FirstCustomCalendar() {
  return (
    <View style={styles.container}>
      <Calendar
        current={Date()}
        // minDate={'2022-01-01'}
        // maxDate={'2025-12-31'}
        monthFormat={'yyyy MM'}
        hideArrows={false}
        hideExtraDays={false}
        disableMonthChange={true}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableArrowLeft={false}
        disableArrowRight={false}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={(date) => <CustomHeaderComponent date={date} />}
        enableSwipeMonths={true}
        dayComponent={({ date, state, marking }) => (
          <CustomDayComponent date={date} state={state} marking={marking as CustomMarkingProps} />
        )}
        markedDates={noticeModkData}
        theme={{
          // selectedDayBackgroundColor: 'blue',
          selectedDayTextColor: '#ffffff',
          // todayTextColor: 'red',
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
    width: '100%',
  },
  dayText: {
    fontSize: 16,
  },
  todayText: {
    color: 'green',
    fontWeight: 'bold',
  },
  disabledDay: {
    backgroundColor: '#f0f0f0',
  },
  notificationText: {
    fontSize: 12,
    color: '#555',
    width: '100%',
    alignItems: 'center',
  },
});
