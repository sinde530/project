common/color.css

```css
@value makerBlack: black;
@value makerWhite: white;
@value makerLightGrey: #e8e7e6;
@value makerLightPink: #ffeae8;
@value makerGrey: #626262;
@value makerGreen: #385461;
@value makerPink: pink;
@value makerShadow: rgba(217, 217, 217, 1);
@value makerColorful: linear-gradient(166deg, rgba(237, 193, 211, 1) 0%, rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%);
@value makerWheat: wheat;
```

index.module.css

```css
@value makerBlack,makerWhite from './common/color.css';
background-color: makerWhite;
```

### 2022/05/12(목)

firebase api key값을 가져와, `service/firebase.js`에 복붙후 불필요한 내용들은 일단 주석처리 해놓는다.

개인 api를 가지고 있을경우 .env를 만들어 이 코드들 안에 내용물들을 넣어준다.

```javascript
folder name / .env

REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DB_URL=
REACT_APP_FIREBASE_PROJECT_ID=
```

.env파일이 퍼블릭으로 하지 않기 위해 .gitignore을 이용하여 .env를 숨겨준다.

```javascript
forlder name / .gitignore

# API Keys
.env
```

```javascript
firebase 연동시 에러나는 부분 (1)

Uncaught FirebaseError: Firebase: No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp() (app/no-app).

```

## 해결 방안(1)

```javascript
import { firebaseApp } from './service/firebase';

const authService = new AuthService(firebaseApp);
```

`firebaseApp` 연동시켜주니 에러가 사라짐

```javascript
firebase 연동시 에러나는 부분 (2)

Uncaught FirebaseError: Firebase: Error (auth/invalid-api-key).
```

## 해결 방안(2)

```javascript
folder name / firebase.js

apiKey: process.env.REACT_APP_FIREBASE_API_KEY
```

`REACT_APP_FIREBASE_API_KEY` / Key라 대소문자 구별이 안되어있었음.

```javascript
function Something()은 외부에서 가져다 쓸수가 없어요 같은 문서에서만 쓸수있어요 export default function Something() 은 export를 했으니까 외부에서 import해서 쓸수 있고
default가 있으니까 이 파일에서 이 function을 디폴트값으로 import한다는 뜻이에요 default로 export를 하면 불러올때 import Something from '파일명'이렇게 되고
default로 export하지 않았으면 import {Something} from '파일명' 이렇게 가져와야 되요
```

```javascript
react hook 사용 로그인 후 로그인이되면 넘어가는 페이지 오류 (3)

Uncaught (in promise) Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React and the renderer (such as React DOM) 2. You might be breaking the Rules of Hooks 3. You might have more than one copy of React in the same app See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
```

## 해결방안(3)

```javascript
folder name / Login.js

const navigate = useNavigate

꼴에 함수라고 변수 지정해줘야했었음.
const navigate = useNavigate()

```

`const navigate = useNavigate()` / 혼내고 싶었다.

```toc

```
