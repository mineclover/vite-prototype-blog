---
date: 2023-01-25
modified: 2023-01-28
---

## 세팅 도움 되는

[env-폴더 구조와 컨벤션 React 세팅](01-Programing/env-폴더%20구조와%20컨벤션%20React%20세팅.md)

## 특이 사항

일단 vite 에는 내장으로 dotenv 역할을 하는 것이 있다
그리고 postcss 가 내장이여서 자체적으로 module.css 를 쓸 수 있다 , scss 도 된다

그것과 별개로 sass 는 깔아야한다

## vite 선택

### vite-react

[vite/packages/create-vite at main · vitejs/vite · GitHub](https://github.com/vitejs/vite/tree/main/packages/create-vite)

`-- --` 가 반드시 들어가야한다고 함에 주의

```
npm create vite@latest ./ -- --template react
```

### vite react-swc

[GitHub - vitejs/vite-plugin-react-swc: Speed up your Vite dev server with SWC](https://github.com/vitejs/vite-plugin-react-swc)

## SCSS

npm install -D sass

### eslint

#### npm install -D eslint

그냥 설치하면 됨

##### npm install -D prettier

프리티어는 보통 IDE 에서 설치해서 써서 뺐다
[01 prettier 세팅](01-Programing/000-프로그래밍-역량/006%20개발환경%20세팅/01%20prettier%20세팅.md)

### npx eslint --init

선택지가 있다

- JavaScript modules (import/export)
- React
- TypeScript ? Yes : No
- Browser , Node
- JSON
- eslint NPM 으로 자동 설치 여부 선택 ( Yes 하면 npm 으로 설치해준다 )

enlint 의 경우 console 에 추가 입력이 필요함

#### 자세한 건 아래 링크

- [ESLint + Prettier + Typescript and React in 2022 | by Marco Antonio Bet | Dev Genius](https://blog.devgenius.io/eslint-prettier-typescript-and-react-in-2022-e5021ebca2b1)
- [GitHub - itsbetma/boilerplate-react-typescript](https://github.com/itsbetma/boilerplate-react-typescript)

### preset

npm i eslint-config-prettier -D
npm i eslint-plugin-prettier -D

- [Eslint & Prettier 설정 방법 (feat. VS Code)](https://velog.io/@njh7799/Eslint-Prettier-%EC%84%A4%EC%A0%95-%EB%B0%A9%EB%B2%95)
  npm install eslint-plugin-react-hooks -D
- [eslint-plugin-react-hooks - npm](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [Rules of Hooks–React](https://reactjs.org/docs/hooks-rules.html)

#### React router

- npm install react-router-dom @types/react-router-dom

#### React styled

- npm i styled-components

[P-로티 리엑트 이해](02-Library&FrameWork/202%20React%20라이브러리/008%20lottie-react/P-로티%20리엑트%20이해.md)
