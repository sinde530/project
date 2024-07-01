import React, { useCallback, useMemo, useRef, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Modal, Button, Pressable } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { CustomMarkingProps } from '../../types/marking';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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

const noticeMockData: { [key: string]: CustomMarkingProps } = {
  '2024-04-06': {
    selected: true,
    marked: true,
    dotColor: '#f7f7f7',
    selectedColor: 'red',
    texts: ['행사1', '행사2'],
  },
  '2024-04-15': { marked: true, dotColor: '#f7f7f7', activeOpacity: 0, texts: ['기념일'] },
  '2024-06-24': {
    marked: true,
    dotColor: '#f7f7f7',
    activeOpacity: 0,
    texts: ['배고파', '밥먹자', '이스포츠 아카데미', '가나다라마바ㅏ아자차카'],
  },
  '2024-06-25': {
    marked: true,
    dotColor: '#f7f7f7',
    activeOpacity: 0,
    texts: ['배고파'],
  },
  '2024-06-26': {
    marked: true,
    dotColor: '#f7f7f7',
    activeOpacity: 0,
    texts: ['캘린더 테스트'],
  },
};

interface CustomDayComponentProps {
  date: any;
  state?: string;
  marking: CustomMarkingProps;
  onPress: () => void;
}

const CustomDayComponent = ({ date, state, marking, onPress }: CustomDayComponentProps) => {
  const dayOfWeek = new Date(date.timestamp).getDay(); // 요일을 가져옴 (0: 일요일, 1: 월요일, ..., 6: 토요일)

  let dayTextColor = 'black'; // 기본 색상
  if (dayOfWeek === 0) {
    dayTextColor = 'red'; // 일요일
  } else if (dayOfWeek === 6) {
    dayTextColor = 'blue'; // 토요일
  }

  return (
    <TouchableOpacity style={[styles.dayContainer]} onPress={onPress}>
      <Text
        style={[
          styles.dayText,
          { color: dayTextColor }, // 요일별 색상 적용
          state === 'today' && styles.todayText,
          state === 'disabled' && styles.disabledDay,
        ]}
      >
        {date.day}
      </Text>

      {marking?.texts &&
        marking.texts.map((text: string, index: number) => (
          <View key={index} style={[styles.dot, { backgroundColor: marking.dotColor }]}>
            <Text style={styles.notificationText} numberOfLines={1} ellipsizeMode="tail">
              {text}
            </Text>
          </View>
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
  const [selectedData, setSelectedData] = useState<CustomMarkingProps | null>(null);
  const [noticeOpen, setNoticeOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<any>('date'); // 모달 유형
  const [visible, setVisible] = useState(false); // 모달 노출 여부
  const [modalData, setModalData] = useState({
    select_day: '',
    select_time: '',
  });

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handlePresentModalPress = useCallback((marking: CustomMarkingProps) => {
    setSelectedData(marking);
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleOpenCreateNotice = useCallback(() => {
    setNoticeOpen((isOpen) => !isOpen);
  }, []);

  const handleCreateNotice = useCallback((event: any) => {
    event.preventDefault();
  }, []);

  const onPressDate = () => {
    setMode('date'); // 모달 유형을 date로 변경
    setVisible(true);
  };

  const onPressTime = () => {
    setMode('time'); // 모달 유형을 time으로 변경
    setVisible(true);
  };

  const onConfirm = (selectedDate: any) => {
    setVisible(false);
    const localDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000); // 로컬 시간대로 변환
    if (mode === 'date') {
      setModalData({ ...modalData, select_day: localDate.toISOString().split('T')[0] });
    } else {
      setModalData({
        ...modalData,
        select_time: localDate.toISOString().split('T')[1].substring(0, 5),
      });
    }
  };

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={Date()}
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
          <CustomDayComponent
            date={date}
            state={state}
            marking={marking as CustomMarkingProps}
            onPress={() => handlePresentModalPress(marking as CustomMarkingProps)}
          />
        )}
        markedDates={noticeMockData}
        theme={{
          textSectionTitleColor: '#000000',
          textDayHeaderFontWeight: 'bold',
        }}
      />

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Event Details</Text>
          {selectedData?.texts &&
            selectedData?.texts.map((text, index) => (
              <Text key={index} style={styles.modalEventText}>
                {text}
              </Text>
            ))}
        </View>
      </BottomSheetModal>

      <TouchableOpacity style={styles.floatButton} onPress={handleOpenCreateNotice}>
        <Text style={styles.floatButtonText}>+</Text>
      </TouchableOpacity>

      {noticeOpen && (
        <View style={styles.noticeModalView}>
          <View style={styles.noticeModalViewHeader}>
            <Text>캘린더 추가하기 모달 오픈</Text>
            <Button title="취소" onPress={handleOpenCreateNotice} />
          </View>

          <View>
            <View>
              <DateTimePickerModal
                isVisible={visible}
                mode={mode}
                onConfirm={onConfirm}
                onCancel={onCancel}
                date={new Date()}
              />
              <Pressable onPress={onPressDate}>
                <Text>날짜 선택</Text>
                <Text>{modalData.select_day}</Text>
              </Pressable>

              <Pressable onPress={onPressTime}>
                <Text>시간 선택</Text>
                <Text>{modalData.select_time}</Text>
              </Pressable>
            </View>

            {/* <View></View> */}
          </View>
        </View>
      )}
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
    color: '#D9D9D9',
  },
  notificationText: {
    fontSize: 12,
    color: '#555',
    width: '100%',
    alignItems: 'center',
  },
  dot: {
    width: '100%',
    borderRadius: 4,
    marginBottom: 2,
  },
  modalView: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalEventText: {
    fontSize: 16,
    marginBottom: 5,
  },
  floatButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: 'purple',
    width: 48,
    height: 48,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  noticeModalView: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
  },
  noticeModalViewHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 16,
    paddingLeft: 16,
    alignItems: 'center',
  },
});
