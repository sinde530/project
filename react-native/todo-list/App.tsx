import React, {useState} from 'react'
import {Text, View, StyleSheet, StatusBar} from 'react-native'
import Title from './Title';
import Input from './Input';

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgrondColor : '#fff',
    alignments : 'flex-start',
    justifyContent : 'flex-start',
  },
});
export default function App() {
  // state type 지정필요
  const [newTask, setnewTask] = useState<string>('');

  // function에 _안씀 < 이거 백엔드가 많이쓰는 문법
  const addtask = () => {
    alert ('add : ${newtask}');
    setnewTask('');
  };

  const handleTextChange = (text: string) => {
    setnewTask(text);
  };

  // 자 여기보시오
  // 여기보면 함수들을 Input 파일에 보내고있지?
  // onSubmitEditing
  // onSubmitEditing
  // 이 친구들을 props로 받으니까 Input파일에 저런식으로 쓰는거임 input에서 props로 받아왔다?그치
  // Title같은경우에도 chridren을 보내서 App.tsx에서 받는데 chridren값을 뭘로 쓸거냐? 라고 묻는거구 ㅇㅋ Title children = 'Todo list'로 값을 정해줬고 usestate에 대해서 다시 좀 알아봐야겟다

  return (
    <View style = {styles.container} >
      <Title chrildren={'Todo list'}/>
      <Input 
        value={newTask}
        // value= {newTask}
        onChangeText={text => handleTextChange(text)}
        // onChangeText = {handleTextChange}
        onSubmitEditing={addtask}
        // onSubmitEditing = {addtask}
        />
        {/* Button Import 안함. */}
      {/* <Button
        children = 'enter'
        onPress = {() => {
          addtask() ;
        }}
      /> */}
    </View>
  );
}


//장실점 그럼 이거 연결 종료오 좋아 나 이거 공부