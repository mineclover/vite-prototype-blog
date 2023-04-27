---
date: 2023-03-12
modified: 2023-04-28
---

react-icon 에서 디폴트 값을 설정하는 것을 바로 넣어놨더니 문제가 생겼엇음

```tsx
function App() {
  return (
    <Provider store={store}>
      q
      <PersistGate persistor={persistor}>
        <IconContext.Provider
          value={{
            size: '24px',
            color: colors.Black,
            style: { marginTop: '-2px', marginBottom: '-2px' },
          }}
        >
          <RouterProvider router={Router} />
        </IconContext.Provider>

        <GlobalStyles />
      </PersistGate>
    </Provider>
  );
}
```

[eslint-plugin-react/jsx-no-constructed-context-values.md at master · jsx-eslint/eslint-plugin-react · GitHub](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values)

컨텍스트는 새 객체를 얻었다고 생각하고 불필요한 재렌더링과 의도하지 않은 결과를 초래할 수 있다
라고 해서 올바른 코드를 반영하기로 하였음

useMemo 도 리액트 컴포넌트 안에 넣어야함

```tsx
const App = () => {
  const iconSetting = useMemo(
    () => ({
      size: '24px',
      color: colors.Black,
      style: { marginTop: '-2px', marginBottom: '-2px' },
    }),
    []
  );

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IconContext.Provider value={iconSetting}>
          <RouterProvider router={Router} />
        </IconContext.Provider>

        <GlobalStyles />
      </PersistGate>
    </Provider>
  );
};
```
