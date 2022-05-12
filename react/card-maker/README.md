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
