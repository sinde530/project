## React Evnet 처리하기

https://ko.reactjs.org/docs/handling-events.html

### Evnet.js

```react
function handleSubmit(event) {
    event.preventDefault();
    console.log("Click");
}

<form onSubmit={handleSubmit}>
    <button type="submit">Activate lasers</button>
</form>
```

## preventDefault 란?

a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행됩니다.

preventDefault 를 통해 이러한 동작을 막아줄 수 있습니다.

<br>
<br>

### Toggle.js

```react
export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }
```

Toggle 컴포넌트는 사용자가 “ON”과 “OFF” 상태를 토글 할 수 있는 버튼을 렌더링합니다.

this.handleClick 을 바인딩 하지 않고 onClick에 전달하였다면 함수가 실제호출될 때 this는 undefined가 됩니다.

```react
onClick={this.handleClick}과 같이 뒤에 ()를 사용하지 않고 메소드를 참조할 경우, 해당 메소드를 바인딩 해야 합니다.
```
