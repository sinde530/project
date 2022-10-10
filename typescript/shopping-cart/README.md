## react-query install

```typescript
yadn add react-query
```

react-query는 서버의 값을 클라이언트에 가져오거나, 캐싱, 값 업데이트, 에러핸들링 등 비동기 과정을 더욱 편하게 하는데 사용된다.

## 사용하는 이유

서버로 부터 값을 가져오거나 업데이트 하는 로직을 store 내부에 개발하는 경우가 많다. <br> 그렇다보니 store는 클라이언트 state를 유지해야하는데 어느 순간부터 store에 클라이언트 데이터와 서버 데이터가 공존 하게 된다. <br> 그리고 그 데이터가 서로 상호작용하면서 서버 데이터도 클라이언트 데이터도 아닌 끔찍한 혼종(?)이 탄생하게 된다. <br> (예를 들면 서버에는 이미 패치된 데이터가 클라이언트에서는 패치되기 전 데이터가 유저에게 사용되고 있는 것이라고 볼 수 있다.) <br>
그래서 react-query를 사용함으로 서버, 클라이언트 데이터를 분리합니다. 이 개념에 대해 동의 하지 않아도 아래의 장점을 보신다면 사용하고 싶은 생각이 들꺼다.

## react-query 장점

여러가지 장점이 있지만 주로 아래와 같이 프론트 개발자가 구현하기 귀찮은 일들을 수행한다.

- 캐싱
- get을 한 데이터에 대해 update를 하면 자동으로 get을 다시 수행한다. (예를 들면 게시판의 글을 가져왔을 때 게시판의 글을 생성하면 게시판 글을 get하는 api를 자동으로 실행 )
- 데이터가 오래 되었다고 판단되면 다시 get (invalidateQueries)
- 동일 데이터 여러번 요청하면 한번만 요청한다. (옵션에 따라 중복 호출 허용 시간 조절 가능)
- 무한 스크롤 (Infinite Queries (opens new window))
- 비동기 과정을 선언적으로 관리할 수 있다.
- react hook과 사용하는 구조가 비슷하다.

## 사용해보기.

```typescript
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
```

## Storybook 설치하기.

- 스토리북으로 디스플레이좀 봐야할꺼같음. 오른쪽 꺠짐
