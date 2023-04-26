---
date: 2023-03-10
modified: 2023-04-24
---

## 소개

URL 에서 사용할 수 없는 예약어
`! * ' ( ) ; : @ & = + $ . , / ? # [ ]`
음 `-_%` 는 쓸 수 있는데 `%` 는 인코딩 시퀀스로 사용됨으로 실질적으로 , `-` 와 `&` , `~` ,`_` 를 사용할 수 있다는 것을 확인했다

`&` 는 중간에 쓸 수 있었지만, 이것도 서브 예약어에 포함되는 것 같다

[URL 매개 변수에 특수 문자를 사용할 수 없음 | Tableau Software](https://kb.tableau.com/articles/issue/special-characters-in-url-parameters?lang=ko-kr)
[[url] URL에 허용되는 문자 - 리뷰나라](http://daplus.net/url-url%EC%97%90-%ED%97%88%EC%9A%A9%EB%90%98%EB%8A%94-%EB%AC%B8%EC%9E%90/)

~`_`- 이 되더라구요 &도 중간에 넣으면되고.. 그래서 하하 ㅎㅎ
next app directory 할 때 써먹어야할 지식..
[API Routes: Introduction | Next.js](https://nextjs.org/docs/api-routes/introduction)
next app directory 가 파일이름 기반이여서 찾아봤는데... URL 예약어인게 꽤 있어서 찾아보는김에 어디까지 쓸 수 있려나 했습니다 하하 파일 이름 컨벤션이랑, URL 컨벤션 교집합하는 특수문자들 찾긴 해야함

```
0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-_~
```

## 네비게이션 동작 제한하기

chrome > 110
다양한 버튼들이 있는 상태에서 화면이 변경되면 안되는 상태에서 버튼이 클릭되면 지연하는 동작 구현되는 것
문제는 호환버전이 너무 높은데;;

[Modern client-side routing: the Navigation API - Chrome Developers](https://developer.chrome.com/docs/web-platform/navigation-api/)
[Glitch :･ﾟ ✧](https://glitch.com/edit/#!/gigantic-honored-octagon?path=index.html%3A92%3A13)
