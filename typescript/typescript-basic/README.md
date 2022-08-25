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

## Class

- class 만들기

1. 생성자 함수가 없으면, default 생성자가 불린다.
2. class의 property 혹은 멤버 변수가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다. => object에 property가 아예 존재하지 않는다.
3. 접근제어자 (Access Modifier) 는 public 이 default이다.

```typescript
class Person {
  name: string = 'Mark';
  age: number = null;

  // 모든 함수는 전부 다 public
  constructor(name: string) {
    this.name = name;
  }
}

// 생성할땐 new로 생성해야함
const person = new Person('Mark');

console.log(person.name;)
```

## class와 property의 접근 제어자

1. private로 설정된 property는 dot 으로 접근할 수 없다.
2. 클래스 내부에서는 private property를 사용할 수 있다.
3. private가 붙은 변수나 함수는 \_를 이름앞에 붙이는데, 이는 문법이 아니라 널리 쓰이는 코딩 컨벤션이다.

```typescript
class Person {
  public name: string;
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }
}
const person: Person = new Person(35);
person.name = 'Mark';
// person._age (X)
console.log(person); // Person {name: 'Mark', _age: 35}
```

## React with Type
