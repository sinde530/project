## node typescript socket

## Install

```typescript
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier -D

```

## .eslintrc.json

```typescript
{
  "root": true,
  "env": {
    "node": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  "plugins": ["prettier", "@typescript-eslint"],
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "rules": {
    "no-console": "off",
    "no-debugger": "warn",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": true,
        "useTaps": true,
        "tabWidth": 2,
        "trailingComma": "all",
        "printWidth": 80,
        "bracketSpacing": true,
        "arrowParens": "avoid"
      }
    ]
  }
}
```

## tsconfig.json

```typescript
{
  "compilerOptions": {
    "module": "commonjs",
    "moduleResolution": "node",
    "checkJs": true,
    "outDir": "./dist",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "useUnknownInCatchVariables": true,
    "skipLibCheck": true
  }
}
```
