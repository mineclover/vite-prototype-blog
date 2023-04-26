---
date: 2023-03-24
modified: 2023-04-24
---

우선 build 를 하면 html 로 된 페이지들이 생성되고
deploy 에서는 git user 세팅을 필요로 한다
Please set the GIT_USER environment variable, or explicitly specify USE_SSH instead!

즉 github-page 호환을 기대할 수 있다
태그 호환 되고
일부 페이지는 리엑트 기반으로 만들어지기도한다

이름에 작성일자를 포함하는 TIL 영역이 있고 작성자 프리셋을 미리 작성한 후 이름만 써도 되도록 구성되있다

일반 기술문서에는 날짜는 필요 없고 ,
단일 페이지 어플리케이션으로 되어 있으나

여러개로 쪼갤 수 있어보인다

나도 카테고리 , 주제 , post 로 나눠져있어서
카테고리가 나뉘여야한다

어느정도 예측가능하지만 실제 적용과는 거리가 있다

## 린트와 허스키

md 파일에 필수 스키마 검사 eslint 만들기
