---
sidebar_position: 1
date: 2023-04-24
modified: 2023-05-14
---

설치에 대해 소개하고자한다 설치는 소개하는대로 한다  
배포에 대해 알고 싶으면 [docusaurus](../docusaurus) 를 확인 할 것

[개요 | Docusaurus](https://docusaurus.io/ko/docs)

```
npx create-docusaurus@latest my-blog classic --typescript
```

## 배포를 위한 세팅

[배포 | Docusaurus](https://docusaurus.io/ko/docs/deployment)

이제 git hub 에 연결하기 위한 정보를 찾아볼 것임  
문서에서는 배포를 build 로 한다

```
npm run build
```

이 deploy 도 수행한다고 한다

로컬에서 배포가 잘 될지 테스트를 하려면 serve 로 로컬에서 테스트 할 수 있다

```
npm run serve
```

## 초기 세팅 상수 지정

작업하는데 단일 경로가 자주 사용됬는데 확장자가 js 이라 상수로 제어하려함  
근데 import 구조가 es5 인 건지 import ~from export 가 안되서 코파일럿 + 검색으로 해결

```js
// settingConstants.js
const github = 'https://github.com/mineclover/my-blog';
module.exports = { github };
// docusaurus.config.js
const github = require('./settingConstants.js').github;
```

[docusaurus.config.js | Docusaurus](https://docusaurus.io/docs/api/docusaurus-config#onBrokenLinks)  
자세한 세팅 방법은 위 링크를 참조하자

## 작동 방식 추론

인식되는 폴더의 종류가 blog, docs 두가지 인데  
혹시 다른 폴더가 인식되지 않을까 해서 front 라는 폴더를 만들어봤지만 제대로 인식하지 않았다  
그래서 docs 안에 폴더를 넣어 관리하기로 했다

### 파일 작동 방식 점검

미리 작성한 md 파일을 넣어봤다  
미리 작성했던 프론트메터에 예약어가 있는 것 같았다 tags 가 작동하지 않음  
정확히는 빈 프론트메터에 오류를  
tags : "123" 같은 것에도 오류를 냈다  
date , modified 에는 오류를 내지 았았다

그래서 tags 에 대해 찾아봄  
[📦 plugin-google-tag-manager | Docusaurus](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-tag-manager)

preset 쓰던지 tags 를 설치하라고 하는데... google 검색엔진을 위한 tags 로 읽혀진다  
tags 에 대한 유효한 정보는 찾지 못했다

[Using Plugins | Docusaurus](https://docusaurus.io/docs/using-plugins#docusauruspreset-classic)

```
npm install --save @docusaurus/preset-classic
```
