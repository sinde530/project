# Calculator

> yarn add babel-loader @babel/core @babel/preset-env @babel/preset-react
> 

```javascript
//babel.config.js

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
};
```

# useState를 이용하여 컴포넌트 상태값 관리하기.

컴포넌트를 보여줘야 하는 내용이 사용자 인터랙션에 따라 바뀌어야 할 때에 어떻게 구현할 수 있는지에 대하여 알아보자. <br>
리액트 16.8 이전 버전에서는 함수형 컴포넌트에서는 상태를 관리할 수 없었는데, Hooks라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할수있게 되었다. <br>
useState 라는 함수를 호출하여, 버튼을 누르면 숫자가 바뀌는 Counter 컴포넌트를 만들어볼것이다.

## Counter.jsx

```javascript
// Counter.jsx
import { useState } from 'react';

export default function Counter() {

  const Increase = () => {
    console.log('+1');
  };

  const Decrease = () => {
    console.log('-1')
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increase}>+ 1</button>
      <button onClick={Decrease}>- 1</button>
    </div>
  );
}

```

- App컴포넌트에서 Counter.jsx를 렌더링을 해보자.

```javascript
// App.jsx

import Counter from './components/Counter';

export default function App() {
  return (<Counter />);
}

```

<div align=center>

![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6353fd38-5007-4b8c-9b6a-bd38e17ad9d2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220607T140617Z&X-Amz-Expires=86400&X-Amz-Signature=f9d82f4b31d58d9bfc08c58f5163d5bb38b79d3d752a2fdf205d4db3ab7e0432&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
</div>

이런 UI가 보여지면 성공적이다.

<br>

```javascript
import React, { useState } from 'react';

이 코드는 리액트 패키지에서 useState 라는 함수를 불러와준다.
const [number, setNumber] = useState(0);

const Increase = () => {
    setNumber(number + 1);
  };

const Decrease = () => {
    setNumber(number - 1);
  };
```

useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해준다. 이 함수를 호출해주면 배열이 반환되는데, 여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수이다.

```javascript
const Increase = () => {
    setNumber(number + 1);
  };

const Decrease = () => {
    setNumber(number - 1);
  };
```

Setter 함수는 파라미터로 전달받은 값을 최신 상태로 설정해준다.
```javascript
<h1>{number}</h1>
```

h1태그에는 이제 0이 아닌 {number} 값을 보여줘야 한다.

코드를 다 수정 후, 버튼을 눌러보면 새로운 파라미터값을 받아오는것을 볼수있다.

## 추가.

### 함수형 업데이트

```javascript
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  const Increase = () => {
    setNumber((prev) => prev + 1);
  };

  const Decrease = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increase}>+ 1</button>
      <button onClick={Decrease}>- 1</button>
    </div>
  );
}

```

onIncrease 와 onDecrease 에서 setNumber 를 사용 할 때 그 다음 상태를 파라미터로 넣어준것이 아니라, 
값을 업데이트 하는 함수를 파라미터로 넣어주었다.

함수형 업데이트는 주로 나중에 컴포넌트를 최적화를 하게 될 때 사용하게 된다. 지금 당장은 함수형 업데이트란게 있는 것 정도만 이해하면 충분하다.

```toc
```
