---
sidebar_position: 4
date: 2023-03-20
modified: 2023-04-27
---

## 작성한 이유

특이한 선언 방식을 보게 되서 포스팅 함

router 선언 하고 Apps.tsx 에 선언하는 구조가 독특했다

### 독특한 router 선언

#### router 선언

```tsx
const Router = () => {
  return (
    <div id="test">
      <Routes>
        <Route path="/*">
          <Route path="pdf-send" element={<PdfSend />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
```

#### router 등록

```tsx
<BrowserRouter>
  <Router />
</BrowserRouter>
```

#### 놀란점

위에 id tset 가 적용이 된다
생각보다 장점이 많다

단점을 아직 못찾았다

### 내가 사용한 선언 방식

#### router 선언

```tsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<Header />}>
      <Route path="" element={<Root />} />
      <Route path="learn" element={<Learn />}>
        {components.map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
  )
);
```

#### router 등록

```tsx
<RouterProvider router={router} />
```

#### 단점

div 로 라우터들을 감쌀 수 없다
말 그대로 라우터 경로만 선언한단
