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

## 타입 어설션

- Type assertions
- 형변환가는 다르다.
  - 형변환은 실제 데이터 구조를 바꿔준다. -`타입이 이거다` 라고 컴파일러에게 알려주는 것을 의미함
  - 행동에 대해서 작성자가 100% 신뢰하는 것이 중요함.
- 문법적으로 두가지 방법이 있다.
  - 변수 as 강제할 타입
  - <강제할타입>변수
    사용방법
    - let someValue: any = "this is a string";
      --.
    - let strLength: number = (<string>someValue).length;
    - let strLength: (someValue as string).length;
