---
date: 2023-03-24
modified: 2023-04-29
---

블로그 개발 작업은 vite-prototype-blog 에서
배포는 vite-prototype-blog/docusaurus 에서
편집은 vite-prototype-blog/docusaurus/macro 에서
메모와 포스팅 작성은 obsidian 에서 하고 있다

하나의 폴더에서 관리하지만 깃은 분리되어있기 때문에 만약 다른 환경에서 배포하고자 하면
순서대로 설치해주어야함
순서대로 설치할 수 있도록 npm run setup 으로 자동설치하도록 하였음
이후 npm run sync 까지 해주면 된다 ( npm i 를 sync 에만 넣어놨음 )

## 사용 방법

### obsidian 에서

배포 전에 lint all 를 하는 것이 좋다

> Linter : Lint all files in the vault

### vscode 에서

일반 리액트 처럼 사용하면 된다
