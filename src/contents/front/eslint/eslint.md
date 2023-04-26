---
date: 2023-03-09
modified: 2023-04-24
---

---

## 소개

린트 (lint) 는 소스 코드에 문제가 있는지 탐색하는 작업을 의미하며, 린터 (linter) 는 이 작업을 도와주는 소프트웨어 도구
[[자바스크립트] ESLint로 소스 코드의 문제 찾기 | Engineering Blog by Dale Seo](https://www.daleseo.com/js-eslint/)

## 상세 설명

[ESLint 상세 설정 가이드 | Engineering Blog by Dale Seo](https://www.daleseo.com/eslint-config/)

## extends 옵션

다른 건 몰라도 이건 알아야 한다
미리 설정된 린트 세팅을 가져올 수 있다

```ts
  "extends": [
    "airbnb", // 에어비엔비 세팅
    "eslint:recommended", // 린트 기본 세팅
    "plugin:react/recommended", // 리엑트 기본 세팅
    "plugin:@typescript-eslint/recommended", // 타입스크립트 기본 세팅
    "plugin:prettier/recommended" // 프리티어 기본 세팅
  ],
```
