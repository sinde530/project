eslint

> yarn add eslint-config-airbnb

> npx install-peerdeps --dev eslint-config-airbnb

<br>
<br>

prettier

<br>
<br>

> yarn add eslint-config-prettier

## Package.json

```javascript
  "eslintConfig": {
    "extends": ["react-app", "airbnb"]
  },
```

설정 커스터마이징
따라하기에 너무 불편하거나 불필요한 코드스타일은 제외시킬 수 있다.

package.json 울 열어서 eslintConfig 안에 rules 라는 필드를 추가하세요.

그리고, 끄고 싶은 에러는 0, 그리고 경고처리만 하고 싶은 에러는 1로 넣자. 위 에러들은 다 끌꺼니까 0으로 값을 설정한다.

```javascript
  "eslintConfig": {
    "extends": ["react-app", "airbnb"],
    "rules": {
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": 0,
      "react/jsx-one-expression-per-line": 0
    }
  },
```

ESLint 설정의 env 에 browser 추가
만약에 eslint-airbnb-config 를 적용하였다면, src/index.js 에서 document 를 사용하려고 하는 부분에서 아마 no-undef 라는 오류가 뜰거다.

이를 방지하기 위해선, package.json 에서 eslintConfig 의 env 객체에 browser 값을 true 로 설정해야한다.

```javascript
  "eslintConfig": {
    "extends": "airbnb",
    "rules": {
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": 0,
      "react/jsx-one-expression-per-line": 0
    },
    "env": {
      "browser": true
    }
  },
```

```javascript
.prettierrc
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

현재 이런 규칙이 설정되어있다:

문자열을 사용 할 때에는 ' 를 사용한다.
코드는 ; 로 끝나야한다.
탭 대신에 스페이스를 사용한다.
들여쓰기 크기는 2칸이다.
객체나 배열을 작성 할 때, 원소 혹은 key-value 의 맨 뒤에있는 것에도 쉼표를 붙인다.
한 줄이 80칸이 넘지 않도록 한다.

## 추가

.eslintrc.js

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    actor: 'readonly',
    Feature: 'readonly',
    Scenario: 'readonly',
    context: 'readonly',
  },
  rules: {
    indent: ['error', 2],
    'no-trailing-spaces': 'error',
    curly: 'error',
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'linebreak-style': 'off',

    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

```
