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