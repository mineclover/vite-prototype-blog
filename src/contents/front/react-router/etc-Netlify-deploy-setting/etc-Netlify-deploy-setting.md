---
aliases:
  - Netlify 세팅
  - 네트리파이 배포 오류
date: 2023-03-14
modified: 2023-05-05
---

## deploy 베이스 URL 세팅이 필요하다

SPA 의 경우 자바스크립트가 추적해야하는데
새로고침을 하면 URL 을 포함한 영역의 정적페이지를 추적하려하고 그래서 루트 경로의 index.html 을 찾지 못해서
필요한 자바스크립트를 실행하지 못하고 그래서 문제가 발생함

### netlify

`public/_redirects` 파일 만들어서 아래 내용 작성

```
/* /index.html 200
```