## install

```typescript
yarn add @types/node typescript
yarn add -D ts-node
```

## tsconfig settings

```
yarn tsc --init --rootDir src --outDir ./bin --esModuleInterop --lib ES2015 --module commonjs --noImplicitAny true
```

## Create src,bin Folders

```
md src
md bin
```

## yarn berry migration

```typescript
yarn set version berry
nodeLinker: pnp

yarn install
```

## VsCode Development Environment Settings

```
yarn dlx @yarnpkg/sdks vscode
```
