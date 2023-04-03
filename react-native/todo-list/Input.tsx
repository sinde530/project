import {useWindowDimensions ,StyleSheet, Text, TextInput} from 'react-native'

const styles = StyleSheet.create({
    input: {
        width: useWindowDimensions().width - 15,
        fontSize : 20,
        backgroundColor : '#f1f3f5',
        borderwidth :1,
        borderRadius : 5,
        margin :5,
        padding : 8,
        alignItems: 'center',
    },
});
// 태그같은거 없을떄 바로 import하는 방법은 해당 태그에 클릭하고 컨트롤 + . 하면 뭐 할꺼냐고 카테고리 형식으로 보여줌.
// 아래에서도 value랑 요것들 type선언을 해줘야 된다는거지? 어디서 value를 가져오는지도 알려줘야지. 이씨부랄 블로그년 제대로 설명 안해줘;;
// 파라미터를 불러왔으면 파라미터에 무슨 값을쓸껀지를 알려줘야하잖아? 지금 이상태면 그냥 ""이거임
// 그래서 useState로 상태관리를해 [title, setTitle]이러면 setTitle로 먼저 안에값을 초기화시켜줘.('')
// 그후에 만약



interface Props {
    value: string;
    onSubmitEditing: () => void;
    onChangeText: (text: string) => void
}

export default function Input({value, onChangeText, onSubmitEditing}: Props){
    return (
            <TextInput  
            style={styles.input}
            placeholder="+ Add a task"
            maxLength={50}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            />
    )
}
