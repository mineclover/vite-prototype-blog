---
sidebar_position: 3.1
date: 2023-03-24
modified: 2023-05-14
---

## 세팅하기

일단 세팅은 아래와 같이 했다

```js
  url: 'https://mineclover.github.io',
  baseUrl: '/',

  projectName: 'mineclover.github.io',
  organizationName: 'mineclover',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
```

우선 build 를 하면 html 로 된 페이지들이 생성되고  
deploy 에서는 git user 세팅을 필요로 한다 이부분은 git 에서 로그인하면 해결된다

## npm script

명령어를 npm 에 넣을 때 따옴표를 붙여야하고 홀 따옴표는 안되고 붙일 때 `\` 로 이스케이프를 걸어야한다  
이걸 몰라서 하루를 삽질했다  
bat 파일을 만들기도 했다 [error-set the GIT_USER](../error-set%20the%20GIT_USER/error-set%20the%20GIT_USER)

```
"set \"GIT_USER=mineclover\" && yarn deploy"
```

## 배포 에러

git action 이 돌아가는 jekyll 에서 중괄호를 받지 못하는 문제가 있었다

![](file/deploy와%20CICD.png)

정규식 으로 강제로 분리하게 했다  
![](file/deploy와%20CICD-1.png)  
그런데 이게 vscode 의 husky 를 통해 실행되는 fix 과정에서 수정되버린다는 문제가 발생함  
![](file/deploy와%20CICD-2.png)

![](file/deploy와%20CICD-3.png)

기존 형식을 유지하는 다른 형태로 수정해야했다

## TODO

- [ ] 린트와 허스키  
       md 파일에 필수 스키마 검사 eslint 만들기
