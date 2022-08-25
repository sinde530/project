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
