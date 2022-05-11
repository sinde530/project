### api 받아오는 과정에서 에러가 남

```
// Uncaught TypeError: Cannot read properties of undefined (reading 'map')
```

## @emotion/styled Install

```javascript
yarn add @emotion/react @emotion/styled
```

2022/04/29(금)
api fetch로 호출해 데이터값 받아오기.
onKeyPress가 무엇인지.
useRef에 대해서 공부하기
(컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것 입니다.)
NVM 에 대해서 공부하기

2022/05/11(수)
비디오 iframe api 가져와 사용

```javascript
<ifrmae
  title="video"
  type="text/html"
  width="100%"
  height="505"
  src={`https://www.youtube.com/embed/${video.id}`}
  // frameborder="0"
  allowfullscreen
></ifrmae>
```

처음 시작했을때 검색기능 초기화 시킨 후 영상 시청중 검색을 하면 타이틀이 띄어진다.

```javascript
const search = (query) => {
  // 초기화 시킨후 검색하면 검색한 타이틀이 보임
  setSelectedVideo(null);
  youtube.search(query).then((videos) => setVideos(videos));
};
```
