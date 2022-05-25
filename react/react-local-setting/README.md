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
