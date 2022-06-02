# slack 

## Service Component Pages.

// pages - service pages
// components - Components
// layouts - Multi Layouts
// hooks - ?

## CodeSpliting
TextEditor들을 SSR로 렌더링이 안되게끔 코드스플릿팅을 해주면 좋다.

# vite emotion/styled Error
```typescript
yarn add @emotion/react
yarn add -D @emotion/babel-plugin
```

```typescript
// tsconfig.json
"jsx": "react-jsx",
    "jsxImportSource": "@emotion/react"
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
});
```

```typescript
// tsconfig.node.json
{
  "compilerOptions": {
    "composite": true,
    "module": "esnext",
    "moduleResolution": "node",
    "jsxImportSource": "@emotion/react"
  },
  "include": ["vite.config.ts"]
}
```
