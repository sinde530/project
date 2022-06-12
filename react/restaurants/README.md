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
  - Number.isNaN() 메소드는 주어진 값이 `NaN`인지 판별한다.
  - 주어진값이 `Number`이고 값이 `NaN`이면 `true`, `false`를 반환한다.
- 초기 initialState값을 0으로 잡아주고 render부분에 넣어준다.
- `Numbers`라는 상수를 만들어줘 `map`함수에 지저분하게 보이지 않기 위해 따로 빼서 관리를 한다.
- 