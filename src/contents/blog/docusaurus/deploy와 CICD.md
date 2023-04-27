---
date: 2023-03-24
modified: 2023-04-27
---

## 세팅하기

일단 세팅은 아래와 같이 했다

```js
  url: 'https://mineclover.github.io',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'mineclover',
  projectName: 'mineclover.github.io',
  deploymentBranch: 'main',
```

우선 build 를 하면 html 로 된 페이지들이 생성되고
deploy 에서는 git user 세팅을 필요로 한다 이부분은 git 에서 로그인하면 해결된다
Please set the GIT_USER environment variable, or explicitly specify USE_SSH instead!

## TODO

- [ ] 린트와 허스키
      md 파일에 필수 스키마 검사 eslint 만들기
