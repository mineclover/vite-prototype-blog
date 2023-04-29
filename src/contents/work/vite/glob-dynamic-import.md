---
date: 2023-04-04
modified: 2023-04-29
---

glob 가 모듈들을 가져오는 구조가 dynamic-import 구조 인 것으로 보인다
[동적으로 모듈 가져오기](https://ko.javascript.info/modules-dynamic-imports)

여기서도 그런 기능을 쓰고 있고 사용할 때
`modules[component].default` 이런 방식으로 객체 값을 뽑는 방식으로 임포트한 객체를 사용한다
![](file/vite-plugin-pages-2.png)
