---
date: 2023-03-23
modified: 2023-04-24
---

## 소개

a 태그의 활용 방법과 사용패턴 분석
a 태그는 쉽게 쓰고 자주 인지하지만 굉장히 많은 속성들과 주의 사항이 있다
[The Anchor element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

## a 태그 속성

### rel 속성

브라우저 접속도 http 통신이라는 것을 상기시켜주는 구간이였다
전달되는 header 를 없애는 기능 ? 그런 것을 담고 있다

## 제목 링크? 텍스트 조각 추적 기능

`#title` 로 많이 사용하는 기능
h1~h6 에 id 가 부여되어있으면 `#tilte` 같은 걸로 id 가 위치한 곳으로 이동하게 해준다
이전 프로젝트에서 만들었던 것 같은데 내장 기능과 비교해봐도 좋을 것 같다

### a href 를 적용하려해봤다

왜인지 적용이 잘 안됬다
일단 link to 를 쓰면 순수한 href 이 안나오고 parms + href 이 붙게 된다 , `/~` 를 하게되면 baseUrl 기준의 링크가 되기 때문에 소용이 없었음

### 그냥 함수로 만들어서 이동하게 했다

```
const location = useLocation();
  useEffect(() => {
    // 페이지 이동
    if (!location.hash) return;
    // console.log('스크롤 실행');
    gotoID(location.hash);
  }, [location]);

  function gotoID(id) {
    // console.log('gotoID : id', id);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
```

## href 에 넣는 링크 형식에 따라 타겟 주소가 변동됨

종류가 3 가지임
전체 경로 넣기 , baseURL 포함 절대경로 , baseURL 부터 상대경로

### 알게된 사연

> pages/indexpage.tsx 작업 중 발생함

```tsx
const LinkComp = styled(Link)`
  background: ${colors.Gray01};
`;
```

이렇게 작성하고
`Link to={'test'}` 를 했을 때 현재 주소에 test 가 되서 오류라고 생각했다 ( baseUrl 기준으로 되는 줄 알았음 )
그런데 아니였다
a 태그로 작성한 styled-components 에 아래와 같이 넣었는데도 같은 동작이 발생함
즉 이게 맞다

```tsx
<LinkComp
        title={to}
        onClick={(e) => {
          e.preventDefault();
          navigate(to);
        }}
      >
```

### 해결 방법

header 에도 같은 방식으로 되있는데
header 는 되고 to 는 안되더라
넘어온 to 의 텍스트를 봤더니
`learn/${item}` 로 넘기고 있었다

앞에 /를 붙여서 `/learn/${item}` 로 만들어야 했다

to 넣을 때 추가 경로 앞에 / 붙여야 baseUrl 기준으로 된다
안붙이면 현재경로 기준 링크가 된다
