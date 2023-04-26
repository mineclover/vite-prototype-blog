---
date: 2023-03-14
modified: 2023-04-24
---

## 소개

내가 사용한 라우팅 패턴
작업 전략에 가깝다

마크다운과 컴포넌트 페이지를 next 의 app Directory 개념을 적용했다
그런데 페이지를 md 으로 만들었기 때문에 페이지가 있는 것을 인식할 수는 있지만
들어갈 수 있는 최이지 형태가 아니기 때문에 리디렉션으로 그냥 본인이 소속된 영양으로 보내는 쪽으로 만들었음
그런데 내가 만약에 md 를 위한 블로그 ci/cd 에 성공할 경우
지금 이 리다이렉을 없애고 그 쪽 페이지로 연결해 주는 방법이 있겠다

```tsx
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';
import React from 'react';

import Header from '../layout/header/Header';
import Learn from '../layout/learn';
import Root from '../pages/Root';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import IndexPage from '../pages/IndexPage';

const modules: any = import.meta.glob('../contents/**/*.tsx', { eager: true });
const markdown: any = import.meta.glob([
  '../contents/**/*.md',
  '!../contents/contents.md',
]);

export interface MappingOrigin {
  origin: string;
  path: string;
  categores: string;
  subject: string;
}

const componentsMap: MappingOrigin[] = [];
const components = Object.keys(modules).map((component) => {
  const path = component
    .replace(/\.tsx$/g, '')
    .replace(/^\.\.\/contents\//g, '')
    .replace(/\/[0-9]{0,2}-/g, '/')
    .replace(/\/[0-9]{0,2}-/g, '/')
    .replace(/\/index$/g, '');
  const splitPath = path.split('/');
  const origin = component.replace(/^\.\.\/contents\//g, 'src/contents/');

  componentsMap.push({
    origin,
    path: `${splitPath.join('/')}`,
    categores: splitPath[0],
    subject: splitPath[1],
  });

  return {
    origin,
    path: `${splitPath.join('/')}`,
    component: modules[component].default,
    categores: splitPath[0],
    subject: splitPath[1],
  };
});

const markdowns = Object.keys(markdown).map((component) => {
  const path = component
    .replace(/^\.\.\/contents\//g, '')
    .replace(/\/[0-9]{0,2}-/g, '/')
    .replace(/\/[^/]*.md$/g, '');

  const origin = component.replace(/^\.\.\/contents\//g, 'src/contents/');
  const splitPath = path.split('/');

  return {
    origin,
    path: splitPath.join('/'),
    category: splitPath[0],
    subject: splitPath[1],
  };
});

interface ICategory {
  [key: string]: ISubject;
}
interface ISubject {
  [key: string]: string[];
}

interface IPost {
  origin: string;
  path: string;
}

const selectCategores = () => {
  const routeMapping: ICategory = {};
  const categores: Array<string> = [];
  let subjects: Array<string> = [];
  markdowns.forEach((post) => {
    if (routeMapping[post.category] === undefined)
      routeMapping[post.category] = {};
    if (routeMapping[post.category][post.subject] === undefined)
      routeMapping[post.category][post.subject] = [];
    routeMapping[post.category][post.subject].push(post.origin);
    // temp[post.category][post.subject].push({
    //   origin: post.origin,
    //   path: post.path,
    // });
    categores.push(post.category);
    subjects.push(post.subject);
    // 자체적으로도 categres만 따로 만들기도 한다
  });
  subjects = subjects.filter((subject) => subject !== undefined); // undefined 제거

  return {
    categores: [...new Set(categores)],
    subjects: [...new Set(subjects)],
    routeMapping,
  };
};

const { subjects, categores, routeMapping } = selectCategores();
console.log('subjects', subjects, categores);
console.log('temp', routeMapping);

//

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<Header />}>
      <Route path="" element={<Root />} />
      <Route path="learn" element={<Learn />}>
        {components.map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
        {Object.keys(routeMapping).map((aItem) => {
          // front , back , etc
          return (
            <Route key={aItem} path={aItem} element={<Root />}>
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
        })}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
      <Route path="dashboard/:moc" element={<Dashboard />} />
      <Route path="indexing" element={<IndexPage />} />
      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Route>
  )
);

function getChildren(children: any) {
  return children.map((child: any) => {
    if (child.children) {
      return { path: child.path, children: getChildren(child.children) };
    }
    return { path: child.path };
  });
}

console.log('routesMap', getChildren(router.routes[0].children));

export default router;
export {
  componentsMap as components,
  markdowns,
  subjects,
  categores,
  routeMapping,
};
// components : 컴포넌트들
// markdowns : 마크다운들
// subjects : 주제들 중복제거 ( 라우팅용 인듯 ) 인덱스 리스트 올릴 때 쓰일듯
// categores : 카테고리들 중복제거
// routeMapping : 마크다운 카테고리별로 정리
```
