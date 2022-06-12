# Script Start == Yarn vite

## Library Add.
> yarn add redux react-redux @types/react-redux <br>
> yarn add eslint <br>
> yarn create @eslint/config <br>
> yarn add -D eslint-config-airbnb-typescript <br>
> yarn add -D prettier eslint-config-prettier eslint-plugin-prettier <br>

## 타입 단언 (const assertion)
`let` 변수의 경우에도 `const` 처럼 `literal type` 으로 추론해 줄수있는데, 그때 사용하는것이 `as const` 이다.

> let title = 'javascript' as const;


## typescript as const 
let,const 변수,상수 지정 = {Type Value} as const

변수에 저장하는 값이 const의 타입으로 들어간다.

```typescript
const INCREASE = "counter/Increment" as const;
```


```javscript
WAKATIME_API_KEY VALUE: 069e6fbf-d03b-464c-95d0-ff608e443b0e
GH_TOKEN VALUE: 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
GIST_ID  VALUE: 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
```
