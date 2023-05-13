---
date: 2023-01-28
modified: 2023-05-14
---

[[Photorage] 4-1. React + Vite + Storybook VS Code 절대경로 설정](https://velog.io/@choi-ju12g/Photorage-4-2.-React-Vite-Storybook-VS-Code-%EC%A0%88%EB%8C%80%EA%B2%BD%EB%A1%9C-%EC%84%A4%EC%A0%95)

여기서 보고  
vite.config.js 에 아래로 설정함

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
    ],
  },
});
```

## 사용

```
import GlobalStyles from '@styles/globalStyles';
```

## 에러 케이스

[E-빌드 import 경로 키워드 설정 실패](03-Programing-Language/JavaScript-자바스크립트/E-빌드%20import%20경로%20키워드%20설정%20실패)

## 타입스크립트 vite

vite 에서 해당 설정을 지원하지 않음  
tsconfig 에서 baseUrl 을 설정할 경우 경로 에러가 발생함 ( .node_modules 를 src 에서 찾음 ㅋㅋ;; )

아래 방식으로 해결됨..

```
"paths": {
      "@/*": ["./src/*"]
    }
```

### 참고

[Setup path aliases w/ React + Vite + TS - DEV Community](https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa)  
[reactjs - How to set multiple aliases in vite react? - Stack Overflow](https://stackoverflow.com/questions/75201705/how-to-set-multiple-aliases-in-vite-react/75201776#75201776)  
[How to configure import aliases in Vite, TypeScript and Jest | Divotion](https://divotion.com/blog/how-to-configure-import-aliases-in-vite-typescript-and-jest)
