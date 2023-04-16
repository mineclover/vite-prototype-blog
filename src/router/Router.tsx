import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';
import { routeMapping as rMapping } from '../utils/mappingUtils';

import Header from '../layout/header';
import Learn from '../layout/learn';
import LearnIndex from '../pages/LearnIndex';
import Root from '../pages/Root';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import IndexPage from '../pages/IndexPage';

const modules: any = import.meta.glob('../contents/**/*.tsx', { eager: true });
const markdown: any = import.meta.glob([
  '../contents/**/*.md',
  '!../contents/contents.md',
  '!../contents/blog/**/*.md',
  '!../contents/etc/**/*.md',
]);

export interface MappingOrigin {
  origin: string;
  path: string;
  categores: string;
  subject: string;
}

const componentPathRegexFn = (path: string) => {
  return path
    .replace(/\.tsx$/g, '')
    .replace(/^\.\.\/contents\//g, '')
    .replace(/\/[0-9]{0,2}-/g, '/')
    .replace(/\/[0-9]{0,2}-/g, '/')
    .replace(/\/index$/g, '');
};

const componentsMap: MappingOrigin[] = [];

const components = Object.keys(modules).map((component) => {
  const path = componentPathRegexFn(component);
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
    categores: splitPath[0],
    subject: splitPath[1],
  };
});

interface ICategory {
  [key: string]: ISubject;
}
interface ISubject {
  [key: string]: string[];
}

const routeMapping: ICategory = {};

markdowns.forEach((post) =>
  rMapping(routeMapping, post.categores, post.subject, post.origin)
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<Header />}>
      <Route path="" element={<Root />} />
      <Route path="learn" element="">
        {components.map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
        {Object.keys(routeMapping).map((aItem) => {
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

export default router;
export { componentsMap as components, markdowns, routeMapping };
// components : 컴포넌트들
// markdowns : 마크다운들
// subjects : 주제들 중복제거 ( 라우팅용 인듯 ) 인덱스 리스트 올릴 때 쓰일듯
// categores : 카테고리들 중복제거
// routeMapping : 마크다운 카테고리별로 정리
