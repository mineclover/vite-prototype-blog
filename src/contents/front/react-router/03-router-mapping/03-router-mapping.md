---
date: 2023-03-15
modified: 2023-04-24
---

## 소개

블로그의 라우터를 메뉴와 서브 메뉴 그 외 작업에 일괄적으로 적용하기 위해서 구조화할 필요가 있었다
나는
폴더를 front , back , blog 등으로 관리하고 내부에 포스팅 별로 폴더를 만들어서 관리한다
포스팅을 위한 코딩은 내부에 index.tsx 를 사용하지만 일단 포괄하면 .tsx 를 쓴다

아무튼 이러한 것은 확실하게 폴더를 베이스로 제작되고 있으며
첫번째 dedth 는 categores 두번째는 subject 세번째는 post 로 되어있다

이걸 관리하면서 제공하기 위해 객체와 배열에서 고민을 했는데
다양한 곳에 재사용할 때 양이 많아져도 순회 없이 원하는 값을 뽑아올 수 있고
키 주소 기반으로 중복 저장이 가능한 점이 적합하였음
그래서 매핑구조는 JSON 객체로 제작하기로 했다

지금 이 코드는 캣체의 원하는 형태로 갑을 넣기 위한 모듈을 소개하는 목적으로 가져왔다

### routeMapping

이 코드는 어 이 코드는 전체 콘텐츠를 매핑하는 목적으로 되어 있어서 origin 도 저장을 하는데
origin 은 post 이다
여기서 나는 자바스크립트의 원래 동작이 객체를 참조형으로 가져오는 거를 이용해서
가져온 객체의 그대로 저장을 하는 방식을 사용했고
코드는 라우터 선언과 확장에도 사용되었다

```tsx
export const routeMapping = (
  routeMapping: ICategory,
  category: string,
  subject: string,
  origin: string
) => {
  if (routeMapping[category] === undefined) routeMapping[category] = {};
  if (routeMapping[category][subject] === undefined)
    routeMapping[category][subject] = [];
  routeMapping[category][subject].push(origin);
};
```

### 컴포넌트 , 마크다운 데이터

slice 에서 post 와 markdown 이 분리되어 있다
이는 저장할 떄부터 그렇게 해서 그렇다

```tsx
import { components, markdowns } from '@/router/Router';

const postState = markdowns;

export const markdownSlice = createSlice({
  name: 'posts',
  initialState: postState,
  reducers: {},
});

const componentsState = components;

export const componentsSlice = createSlice({
  name: 'components',
  initialState: componentsState,
  reducers: {},
});
```

우선 라우팅 방식이 계층 구조로 되어 있지 않고 이중 라우팅이랑 삼중 라우팅 한꺼번에 정적으로 관리하는 구조를 가지고 있다
어차피 콘텐츠는 정해져 있고 콘텐츠가 있는 곳에는 파일이 있기 때문에 파일을 기준으로 라우팅을 설정한 거고
여기서 컴포넌트 렌더링 돼야 되지만 마크 다운은 렌더링이 안되기 때문에 컴포넌트 랑 라우터를 나눴다

라우팅 용인 `components` 와 공유되는 객체인 `componentsMap`

```tsx
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
```

마크다운은 처음부터 매핑만을 위해 존재함

```tsx
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
    categores: splitPath[0],
    subject: splitPath[1],
  };
});
```

그냥 간단하게 컴포넌트들은 처음 가져올 때부터 컴포넌트를 리포트한 다음에 라우팅을 해서 라우터의 Outlet 을 잘 사용할 수 있게 작업하였음
자세한 내용은 [vite-glob](../../../work/vite/vite-glob.md)

## 리액트로 객체 데이터 전달

여기서 나는 메뉴의 이 객체를 사용해야 했는데 리액트 밖에 있는 데이터를 안으로 가져올 수 없기 때문에
리덕스 스테이터스를 선언할 때 원하는 값을 넣어서 리덕스 생명주기로 넣었음
작동 방식을 살펴보니 이미 선언된 객체를 리에트 생명주기 안으로 호출할 때 사용할 수 있을 것 같다
라우터를 거쳐서 하면은 되는데 컴포넌트 안에서 바로 호출하면 안 돼 코드는 호출시기에 실행되기 때문에 라우터에서
호출한 게 더 빨리 실행돼서 원하는 게 실행되는 걸 수도 있는데
아주 자세한 논리는 아직 잘 모르겠다

### 여러가지를 시도한 코드가 아직 남아있다
