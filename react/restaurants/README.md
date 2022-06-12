# CoodSoom 복습하기

## 1강 JSX

- npx serve 를 이용하여 index.html 로컬에 보이게 하기.
- webpack 설치하기.

```typescript
"dependencies": {
    "webpack": "^5.73.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.9.2"
  }
```

- npx webpack-dev-server 사용해보기
- eslint install 후 초기화 시키기
   - `yarn eslint --init`
- eslint 커맨드 사용해서 틀린부분 맞쳐주기.
   - `yarn eslint --fix .`

- public => index.html 넣기.
- index.js innerHTML사용하여 글자 출력하기.
- `dom`객체 만들기.
- 함수를 사용하여 중복되는부븐들을 묶어 간단하게 사용하기.


### javascript 사용
- document
  - 새로운 객체를 생성한다.
- getElementById()
  - 같은 이름으로 된 Id를 찾아 사용하라.
- createElement()
  - 태그명을 사용해 새로운 요소를 반환한다.
- createTextNode()
  - 텍스트 노드를 생성한다.
- const
  - 상수 선언.
  - var,let 이란 다른 이유.
  - 상수의 값을 재할당을 할수없고, 다시 선언할수 없다.
- appendChild()
  - append와는 다르게 노드객체만 추가할 수 있다.
- tagName
  - Element 인터페이스 의 tagName 읽기 전용 속성은 호출된 요소의 태그 이름을 반환한다.
- children
  - 노드 이외의 노드가 필요하지 않은 경우라면 children 프로퍼티를 사용
- ...children
  - ES6 spread 문법이다.
    - ... 이란 :)
      - es6 spead 문법이고 속성을 그대로 사용하면서 새로운 객체를 만들어주는 역활을 한다.
      - 핵심 :)
        - 기존의 것을 건들이지 않고, 새로운 객체를 만들어줌.

<hr>

## JSX

- babel 사용하기.
- babel-loader = wepback에서 babel을 쓸수있게 도와줌.
- webpack.config.js 추가하기

```typescript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        // 정규표현식 참고
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
```

- babel.config.js 추가하기.
```typescript
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

- /* @jsx createElement */ 사용하기
- toLowerCase() // 대문자를 소문자로 변경하여 읽어줌.
- map() 함수 사용하여 1,2,3 array 뽑아내기.
- 1,2,3 버튼을 클릭했을때 값이 나오게 만들기.
  ```typescript

  function handleClickNumber(value){
    count = value;
    render();
  }

  {[1,2,3]map.((i) => (
    <button type="button" onClick={() => handleClickNumber(i)}>{i}</button>
  ))}
  ```

# let 제거하기 (과제 1)

- Number.isNaN()
  - `Number.isNaN()` 메소드는 주어진 값이 `NaN`인지 판별한다.
  - 주어진값이 `Number`이고 값이 `NaN`이면 `true`, `false`를 반환한다.
- 초기 `initialState`값을 0으로 잡아주고 render부분에 넣어준다.
- `Numbers`라는 상수를 만들어줘 `map`함수에 지저분하게 보이지 않기 위해 따로 빼서 관리를 한다.

# 사칙연산 계산기 만들기 (과제 2)

- 과제를 하면서 궁금한 점.
```typescript
function calculate(operator, accmulator, number) {
  return accmulator + number;
}
```

- (operator, accmulator, number)이 초기값들의 순서가 바뀌면 제대로 작동이 안하는데 왜 그런지 궁금함.
- 계산기를 만들때 숫자가 `1111` 계속해서 출력하게 만드려면 * 10을 해줘야 나온다.

```typescript
number: number * 10 + value,
```
### 사칙연산이 실행되게 하기

```typescript

// 3. 사칙연산 만들기
const operatorFunctions = {
  '': (x,y) => x || y, // 초기값이 없으므로 y를 반환하는데 ||을 사용하여 이렇게 만들수있음.
  '=': (x,y) => x || y,
  '+': (x,y) => x + y,
  '-': (x,y) => x - y,
  '*': (x,y) => x * y,
  '/': (x,y) => x / y,
}

// 4. 사칙연산이 가능한 함수 만들어주기.
// 순서가 뒤바뀌면 안된다.
// 초기 operator 는 ''이란 초기값을 가지고있어 '': 이 값을 반환한다.
// number의 값은 operator에 의해 값이 number => accmulator로 넘어간다.
// accmulator에 넘어간 후 숫자패드 버튼을 클릭시 값이 {number}에 저장되는걸 알 수 있다.
function calculate(operator, accmulator, number) {
  return operatorFunctions[operator](accmulator, number);
}

// 1. 초기값을 설정해준다.
const initialState = {
  accmulator: 0, // 숫자 누르고 사칙연산 클릭시 이쪽으로 값이 전달이 된다.
  number: 0, // 숫자가 들어갈곳.
  operator: '', // '+, -, *, /, =' 이 들어갈 곳
};

// 2. 
function render({ number, operator, accmulator}){
  function handleClickNumber(value) {
    // 만약 number가 아닌 다른타입이 들어갈경우 에러를 발생한다.
    if (Number.isNaN(Number(value))) {
      return false;
    }
    return render({
      accmulator, // accmulator의 초기값은 0이다
      number: number * 10 + value, // 계산기를 만들때 숫자가 `1111` 계속해서 출력하게 만드려면 * 10을 해줘야 나온다.
      operator,
    })
  }

  function handleClickOperator(value) {
    return render({
      accmulator: calculate(operator, accmulator, number), // 사칙연산 클릭시 number의 값은 0이되고 accmulator에 반환된다.
      number: 0,
      operator: value,
    })
  }

  function handleClickReset() {
    render(initialState); // [reset] button은 초기값으로 돌려준다.
  }
}

```

- 2차원 array를 사용해 키패드 나열하기.

```typescript
const Numbers = [[1,2,3],[4,5,6],[7,8,9,0]];

<p>
  {Numbers[0].map((i) => (
    <button type="button" onClick={() => handleClickNumber(i)}>
      {i}
    </button>
  ))}
</p>
<p>
  {Numbers[1].map((i) => (
    <button type="button" onClick={() => handleClickNumber(i)}>
      {i}
    </button>
  ))}
</p>
<p>
  {Numbers[2].map((i) => (
    <button type="button" onClick={() => handleClickNumber(i)}>
      {i}
    </button>
  ))}
</p>
```

## 2강 REACT

- webpack.config.js 추가하기

```typescript
// webpack.config.js

// path에 잡힌 src/index.jsx 를 사용할수 있게 해줌.
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        // 정규표현식 참고
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    // [string] = ['.js', '.json', '.wasm']
    // 확장자를 순서대로 해석해준다.
    extensions: ['.js', '.jsx'],
  },
};

```

### React V18 migration =ㅅ=

```typescript
// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

```

- function을 이용헤 분리 해보기

```typescript
function renderButtons(){
  return (
    <>
      {
        [1, 2, 3].map((i) => (
          <button type="button">
          {i}
          </button>
        ))
      }
    </>
  )
}

function App() {
  return (
    <div>
      {renderButtons()}
    </div>
  )
}
```

- map을 활용해 1,2,3이 나오는 버튼을 따로 분리해서 렌더링을 한 장면이다.

### button도 분리해보기

```typescript
function renderButton(value) {
  return (
    <button type="button">
      {value}
    </button>
  )
}

function renderButtons() {
  return (
    <>
      {
          [1, 2, 3].map((i) => (
            renderButton(i)
          ))
      }
    </>
  );
}

```