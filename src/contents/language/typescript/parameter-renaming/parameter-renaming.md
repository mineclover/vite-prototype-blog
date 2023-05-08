---
date: 2023-05-05
modified: 2023-05-05
---

javascript parameter renaming 은 공교롭게도 타입 지정 방식과 유사하다

타입스크립트에서 이 두가지를 같이 쓰게 되는 경우가 있었다
이 코드에서 named 를 components 로 바꿔야하고 동시에 RouteList 라는 타입으로도 지정해줘야했다

축약하고 싶어서 방법이 있나 찾아봤다
마땅히 좋은 답변을 기대할 순 없었다

```js
cosnt named = [data];

export const namedRouteList = (named) => {
  return components.map(({ path, component: Component }) => {
    return <Route key={path} path={path} element={<Component />} />;
  });
};
```

흠 하나의 코드로 관리하고 싶었는데 이름을 바꾸는게 어려운 것 같다
꼭 필요한 타입선언을 먼저하고 내부에서 바꿔주기로 했다

```tsx
export const namedRouteList = (named: RouteList) => {
  const components = named;
  return components.map(({ path, component: Component }) => {
    return <Route key={path} path={path} element={<Component />} />;
  });
};
```

작업 중에 다 해당 렉티컬 범위 값 받는 거로 노선 변경 했다

```tsx
export const indexRouteList = () => {
  const components = indexing;
  return components.map(({ path, component: Component }) => {
    return <Route key={path} path={path} element={<Component />} />;
  });
};
```
