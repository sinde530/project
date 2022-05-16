## keys

map()을 사용해서 중복되는 컴포넌트들을 출력해줬는데
콘솔에 `key` 값이 없다는 오류 메시지가 뜨는데 동작은 잘되서 `key`값을 왜 넣어야 하는지.

`key`는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다. `key`는 `element`에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야한다.

```javascript
const Comments = [
  {
    id: 0,
    name: 'Crong',
    text: 'Work To Do #1',
  },
  {
    id: 1,
    name: 'sinde',
    text: 'Work To Do #2',
  },
];
```

`key`는 다른 항목들 사이에서 고유하게 식별할 수 있는 것을 사용한다.

렌더링 한 항목에 부여할 id값이 마땅히 없다면 `index`를`key`로 사용할수 있다.

```javascript
{
  Comments.map((item, index) => (
    <li key={index}>
      {item.name}
      {item.text}
    </li>
  ));
}
```

순서가 바뀔 수 있는 경우에는 `key`에 인덱스를 사용하는 것을 권장하지 않는다. 이로인해 성능이 저하되거나 state와 관련된 문제가 발생할 수 있다.

만약 리스트에 `key`를 지정하지 않으면 React는 기본적으로 `index`를`key`로 사용한다.
