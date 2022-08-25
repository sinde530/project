# TypeScript-basic

## npm으로 진행하는중.

## tslint install / init

```typescript
npm i tslint -D
./node_modules/.bin/tslint --init
```

## 최상위 프로퍼티

- compileOnSave
- extends
- compileOptions
- files
- includs
- exclude
- typeAcquisition

### compileOnSave

- true / false (default false)
- 최상단에 설정해야 한다?

## TypeScript Basic

- 사용자가 만든 타입은 기본 자료형들로 쪼개진다.
- JavaScript 기본 자료형을 포함 (superset)

  - ECMAScript 표준에 따른 기본 자료형은 6가지
    - Boolean (true, false값)
    - Number (16진수 및 10진수 리터럴 외에도 2진수 8진수도 지원함)
    - String (따옴표(""), 작은따옴표('') 문자열 데이터 일때 씀)
    - Null
    - Undefined
    - Symbol (ECMAScript 6에 추가)
    - Array: object 형 (Array<타입>, 타입[])
      사용방법
      - let list: number[] = [1,2,3];
      - let list: Array<number> = [1,2,3]

- 프로그래밍을 도울 몇가지 타입이 더 제공됨.
  - Any (적ㅍ..)
  - Void (함수의 return사용할때 주로 사용 함)
  - Never
  - Enum
  - Tuple: object형
