## useState

tate 변수, 해당 변수를 갱신할 수 있는 함수 이 두 가지 쌍을 반환합니다. 이것이 바로 const [count, setCount] = useState() 라고 쓰는 이유

## useEffect

componentDidMount 혹은 componentDidUpdate 와는 달리 useEffect 에서 사용되는 effect는 브라우저가 화면을 업데이트하는 것을 차단하지 않습니다.
이를 통해 애플리케이션의 반응성을 향상해줍니다.
