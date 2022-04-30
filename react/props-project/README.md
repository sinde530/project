## 컴포넌트 Props란?

<b>properties</b>의 줄임말로서, 컴포넌트의 입력값이다.
props는 부모 컴포넌트로부터 자신 컴포넌트로 전달된 데이터를 의미한다.

```javascript
import "./App.css";
import Hello from "./componenet/Hello";

function App() {
  return (
    <div className="App">
      <Hello name="Crong" />
    </div>
  );
}

export default App;
```

<br>

App 컴포넌트에서 이름을 전달을 해보자. <br>
class 컴포넌트와 function 컴포넌트가 있는데 작성하는 방법은 조금 다르다.

```
// Class Component
import React, { Componenet } from "react";

class Hello extends Componenet {
    render() {
        return <div>{this.props.name}</div>
    }
}

// Function Component
import React from "react";

function Hello(props) {
    return <div>{props.name}</div>
}

export default Hello;
```

<br>

## 두 번째 방법

### react-props-destructuring

- props를 destructuring으로 전달받는 방법이 있다.
- 리액트는 다른 컴포넌트로 `props`를 통해 데이터를 전달한다.
