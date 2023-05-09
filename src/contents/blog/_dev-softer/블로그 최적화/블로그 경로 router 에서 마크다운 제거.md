---
date: 2023-05-10
modified: 2023-05-10
---

빌드가 잘 안된다 문제를 찾고자 했다

## try 1

마크다운은 외부경로로 이동하는 것이 합리적이다
따라서 router 에 들어가있던 아래 코드를 제거했다

그런데 이 문제가 아니였다

```tsx
{
  Object.keys(routeMapping).map((aItem) => {
    // front , back , etc
    return (
      <Route key={aItem} path={aItem} element={<LearnIndex />}>
        {Object.keys(routeMapping[aItem]).map((bItem) => {
          // react, node, etc

          return (
            <Route
              key={bItem}
              path={bItem}
              element={<Navigate to={`learn/${aItem}`} replace />}
            />
          );
        })}
      </Route>
    );
  });
}
```

## issue

watch 모드를 킨게 아니냐고 했다
나는 아니라고 했는데
config 을 체크하라고 했다
과거 핫 리로드 제어를 위해서 넣었던 코드가 있었다
이게 build 를 watch 모드로 유지시키는 것이였다

```
build: {
    watch: {
      buildDelay: 10000,
    },
  },
```

그래서 try 1 에서 한 것은 다시 돌려놓기로 했다
