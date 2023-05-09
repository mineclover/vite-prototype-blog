---
date: 2023-05-10
modified: 2023-05-10
---

마크다운은 외부경로로 이동하는 것이 합리적이다
따라서 router 에 들어가있던 아래 코드를 제거한다

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
