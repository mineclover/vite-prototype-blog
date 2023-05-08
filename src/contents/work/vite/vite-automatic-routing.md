---
aliases: vite 자동 라우팅 모듈화
date: 2023-05-05
modified: 2023-05-05
---

경로로 라우팅하거나 이름으로 라우팅함
복잡한 기능은 빼고 그냥 index.tsx 로 된 것을 추적해서 연결해주는 기능을 가졌음
고유 이름을 가지고 있을 경우 하던대로 수동 연결

반대로 라우터 객체를 뽑아서 경로를 추출해서 Home 컴포넌트 같은 것으로 만드는 것도 가능하다
blog router 에 적용되있음

## 전체 코드

```tsx
/**
 * 이 코드를 호출하는 폴더 기준으로 대상이 되는 폴더를 지정합니다.
 * glob안에서 변수를 사용할 수 없기 때문에, 직접 입력해야 합니다.
 *
 * @description 해당 폴더 내부의 모든 폴더를 검색하여 index.tsx 파일을 Route 컴포넌트에 import 합니다
 * @returns Route 컴포넌트들이 담긴 배열를 반환합니다.
 */
import { Route } from 'react-router-dom';
const modules: any = import.meta.glob('./router/**/index.tsx', {
  eager: true,
});

type RouteList = {
  path: string;
  component: any;
}[];

export const paths = Object.keys(modules).map((component, index) => {
  const path = './router/**/index.tsx';
  const text = path.split('**');
  const origin = component.replace(text[0], '').replace(text[1], '');

  return {
    named: `/${origin}`,
    indexing: `/${index}`,
  };
});

const named: RouteList = Object.keys(modules).map((component, index) => {
  const path = './router/**/index.tsx';
  const text = path.split('**');
  const origin = component.replace(text[0], '').replace(text[1], '');

  return {
    path: `/${origin}`,
    component: modules[component].default,
  };
});

const indexing: RouteList = Object.keys(modules).map((component, index) => {
  return {
    path: `/${index}`,
    component: modules[component].default,
  };
});

// 기본 형식 라우터를 입력 받아서 컴포넌트로 변환
export const routeList = (components: RouteList) => {
  return components.map(({ path, component: Component }) => {
    return <Route key={path} path={path} element={<Component />} />;
  });
};

// 이미 선언된 named를 입력 받아서 컴포넌트로 변환
export const namedRouteList = () => {
  const components = named;
  return components.map(({ path, component: Component }) => {
    return <Route key={path} path={path} element={<Component />} />;
  });
};

// 이미 선언된 indexing을 입력 받아서 컴포넌트로 변환
export const indexRouteList = () => {
  const components = indexing;
  return components.map(({ path, component: Component }) => {
    return <Route key={path} path={path} element={<Component />} />;
  });
};
```

## 적용 예시

```tsx
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import LoginTest from './router/loginTest';
import Home from './router/home';
import { indexRouteList, namedRouteList } from './AutoRouter';

const router = createBrowserRouter(
  createRoutesFromElements([
    ...indexRouteList(),
    ...namedRouteList(),
    <Route path="/*" element={<Home />} />,
    <Route path="/02" element={<LoginTest />} />,
  ])
);

export { router };
```

## Home 코드

index 쪽의 키는 순서대로 0~1 같은거 들어가면 경고 뜨니 두 값을 같이 사용해줬다
없으면 아무 값이나 추가해주자

```tsx
import { paths } from '../AutoRouter';
import { Fragment } from 'react';

const home = () => {
  return (
    <div>
      <h2>바로가기</h2>
      {paths.map((data) => (
        <Fragment key={data.named + data.indexing}>
          <a href={`/${data.named}`}>{data.named} 바로가기</a>
          <span> or </span>
          <a href={`/${data.indexing}`}>{data.indexing} 바로가기</a>
          <br />
        </Fragment>
      ))}
    </div>
  );
};

export default home;
```
