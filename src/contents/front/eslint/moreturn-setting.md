---
date: 2023-03-09
modified: 2023-04-24
---

흠 .. 다른 사람이 초기 세팅을 햇는데 에어비엔비 설치만 하고 적용을 안해둠
프리티어도 안했고 그래서 세팅 넣었더니 문제가 많았음

허스키를 설치해서 린트 전체 검사 자동화를 하고 봣더니 문제가 많다

## 설정 과정

### 설치해야하는 라이브러리가 좀 많다

#### 허스키 세팅

[husky, lint-staged를 사용하자( sub : ESLint 자동화하기 )](https://velog.io/@do_dadu/husky-lint-staged%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%9E%90-sub-ESLint-%EC%9E%90%EB%8F%99%ED%99%94%ED%95%98%EA%B8%B0)

##### 처음 세팅 할 때

```
npx mrm lint-staged
```

##### 기존 프로젝트에 넣을 때

```
npx mrm package editorconfig gitignore eslint prettier lint-staged
```

`npm run lint` 를 하면 수정도 된다

##### 패키지 업데이트 안되는 버그 발생 시

허스키, 린트, 린트스테이지 등이 설치 안될 때
린트 세팅을 먼저한다
프리티어를 미리 설치했으면 , 이 방식으로 해야하는 것 같다

```
npm i lint-staged husky
```

```
npx mrm package gitignore eslint prettier lint-staged
```

#### 린트 세팅

```shell
npx eslint --init
```

[CRA에 ESLint 와 Prettier 적용하기](https://velog.io/@sonic/CRA%EC%97%90-ESLint-%EC%99%80-Prettier-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
린트가 다양한 상황들에 규칙들을 정하는 건데
라이브러리의 규모가 좀 크기 때문에
일단 Default 로 설정하고 , 아는 세팅을 추가해나가는 방식이 좋다

설명에 잘 나와있고, 설정이 필요 없는 경우가 잘 나와있다
extends 에 :recommended 붙이는 건 스텐다드 세팅을 하는 것으로
해당 문구가 붙은 이름은 관련된 세팅이 아래의 plugins, rules 에 적용되는 효과를 가지고 있다
( 해당 내용들도 공식 문서에 잘 작성되어 있음 )

```
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
```

##### 린트 라이브러리

```shell
// 기본 린트에서 쓰는 import , 유명한 프리셋 airbnb
npm i -D eslint-plugin-import eslint-config-airbnb
// 타입스크립트
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
// 린트 프리티어
npm i -D eslint-config-prettier eslint-plugin-prettier
```

##### 설치 안된 것만 추림

```
npm i -D eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-import-resolver-typescript
```

##### 자주 쓰는 rules

```json
"rules": {
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function" // 리액트 JSX 문법을 화살표 컴포넌트로 통일시킨다
      }
    ],

    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto" // DeleteCR 에러 무시 처리
      }
    ],
    "no-console": "warn", // 콘솔로그 없애라
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-types": "warn", // 타입에 Object 쓰지 마라 {} 와 같다
    "import/prefer-default-export": "off", // ?
    "react/jsx-filename-extension": [ // jsx 문법을 사용할 수 있는 파일 확장자 지정 (  해당 확장자가 아닌데 jsx가 있으면 에러 )
      1,
      {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    ]
  },
```

[eslint-plugin-react/jsx-filename-extension](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

no-unexpected-multiline 에 대한 오류와 관련된 eslint-semi 도 보면 좋다
[semi - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/rules/semi)

##### eslint-import 에 기능이 은근 많았다

[eslint-plugin-import/order.md at main · import-js/eslint-plugin-import · GitHub](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)

##### import/no-unresolved

[[문제 해결] ESLint import/no-unresolved](https://velog.io/@gingaminga/%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0-ESLint-importno-unresolved)
