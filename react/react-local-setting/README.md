# Babel

모든 브라우저가 ES6 이상의 문법을 모두 적용하지 않았기 때문에 ES5 이전의 문법으로 컴파일해 주는 작업이 필요하다. 그 작업을 해주는 게 바로 Babel이다.

## Yarn Babel Install

> yarn add -D @babel/core @babel/preset-env @babel/preset-react

- @babel/core : Babel을 사용하기 위한 베이스
- @babel/preset-env : ES6 문법을 지원하는 플러그인을 모아둔 패키지
- @babel/preset-react : React 문법을 지원하는 플러그인을 모아둔 패키지

프로젝트의 Root에 해당 파일을 만들어 코드 작성을 해주면 Babel설정이 끝난다.

```javascript
// .babelrc

{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

# eslint

코드에서 발견된 문제 패턴을 식별하고 개발자에게 알려주는 역활을 한다. 코딩 스타일 가이드에 벗어나 개발을 하면 오류로 감지하고 알려준다.

## eslint install

> yarn add -D babel-eslint

```javascript
// .eslintrc.js

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['airbnb', 'airbnb/hooks', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': ['error'],
  },
};
```

# Prettier

코드를 세부적인 설정에 따라 자동으로 정리하는 역할을 한다.

> yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

- eslint-config-prettier : ESLint의 포맷팅을 비활성화 시킨다.
- eslint-plugin-prettier : 포맷팅 규칙을 Prettier를 사용해서 추가시킨다.

```javascript
// .prettierrc.js

module.exports = {
  // 문자열은 홀따옴표(')
  singleQuote: true,
  //코드 마지막에 세미콜른
  semi: true,
  //탭의 사용을 금하고 스페이스바 사용으로 대체
  useTabs: false,
  // 들여쓰기 너비는 2칸
  tabWidth: 2,
  // 객체나 배열을 작성 할 때, 원소 혹은 key-value의 맨 뒤에 있는 것에 쉼표
  trailingComma: 'all',
  // 코드 한줄이 maximum 80칸
  printWidth: 80,
  // 화살표 함수가 하나의 매개변수를 받을 때 괄호를 생략
  arrowParens: 'avoid',
};
```
