---
sidebar_position: 4
date: 2023-03-23
modified: 2023-04-27
---

## 소개

나는 전체 컴포넌트에서 링크의 hash 값이 있을 경우 아이디를 찾아가도록 하는 기능을 구현하려했다
전체 커포넌트에 한번에 부여하고 싶었고
그래서 haeder 에 해당 기능을 넣었는데
렌더링되는 것도 비동기였어서 찾아갈 id 가 나오기전에 goID 가 실행되버리는 문제가 발생했다

그래서 찾아봤는데 , 딱히 렌더링이 종료된 시점을 알 수 있는 방법은 없었고

goID 를 실행하는 useEffect 가 렌더링에 관여하는 useEffect 보다 어디에 있어야하는지는 크게 상관 없고
실행되는 시점이 타겟팅되는 컨텐츠를 담고 있는 state 를 감시하고 있어야했다

이게 적용된 컴포넌트는 id 가 포함된 컴포넌트가 index 에 담겨져서 관리됬기 때문에 감시했다

useEffect 로 컨텐츠가 생성된다면 업데이트된 후 실행되서 갈 수 있도록 해야한다
useEffect 가 최초로 실행된 시점에선 이동할 대상이 없기 때문

```tsx
useEffect(() => {
  if (hash) {
    gotoID(hash);
  }
}, [index]);
```

```tsx
function gotoID(id: string) {
  document
    .querySelector(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
export default gotoID;
```

[vscode link](vscode://file/P:/Dev/react-playground/src/utils/HashLink.ts)
