class Test {
  public static getTest(): string {
    return 'test';
  }
}

Test.getTest();

interface Props {
  name: string;
  age: number;
}

const p: Props = {
  name: '가나다',
  age: 35,
};

let a: any;

/**
 * 유니온 타입
 */
type StringOrNumber = string | number;

let b: StringOrNumber;
b = 'string';
b = 1;

function test(arg: StringOrNumber): StringOrNumber {
  return arg;
}

const person: [string, number] = ['mark', 35];
console.log(person);

// Type Alias 로 Generic 표현하기
// Type Alias 와 keyof 키워드 사용
