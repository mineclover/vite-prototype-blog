import { ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@/app/hooks';
import { componentState, markdownState } from '@/features/postSlice';
import { Pretendard, Jamsil, MaxWidthStyle } from '@/global/styleUtils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import colors from '@/global/colors';
import _ from 'lodash';
import {
  BiCodeBlock,
  BiLogInCircle,
  BiEdit,
  BiLinkExternal,
  BiFile,
  BiHdd,
} from 'react-icons/bi';
import IconLinkBox from '@/global/iconLinkButton';
import IconBlackLink from '@/global/iconBlankButton';
import gotoID from '@/utils/gotoHashLink';

const gitLink = 'https://github.com/mineclover/react-playground/blob/main/';
const vscodeURI = 'vscode://file/P:/Dev/react-playground/';

const App = () => {
  // item.origin은 URI를 위한 정보, 고유값도 됨

  // location에 origin 있음
  const { hash } = useLocation();
  const navigator = useNavigate();

  // const { origin: pageOrigin } = location;
  type RootObject = typeof components;

  type IndexObject = {
    [key: string]: ReactNode[];
  };

  const [index, setIndex] = useState<IndexObject>({});
  const components = useAppSelector(componentState);
  const markdowns = useAppSelector(markdownState);

  // category, subject, post 인데 post는 없을 수도 있음
  // 단일 컴포넌트에 tsx , md 같이 넣으려했는데 복잡해져서 그냥 나누려고 함
  // 그러다가 카테고리 만들고 넣기로 함

  const testKeyArray = useRef<string[]>([]);

  const indexComponentGen = (state: IndexObject, rootArray: RootObject) => {
    const resultObject: IndexObject = _.cloneDeep(state);
    const nameExport = (origin: string) => {
      const path = origin
        .replace(/\.tsx$/g, '')
        .replace(/\.md$/g, '')
        .replace(/^src\/contents\//g, '')
        .replace(/\/[0-9]{0,2}-/g, '/')
        .replace(/\/[0-9]{0,2}-/g, '/')
        .replace(/\/index$/g, '');
      const paths = path.split('/');
      const len = paths.length;
      console.log(len, paths);
      if (len === 2) return paths[1];
      return paths.slice(2, len).join('/');
    };
    rootArray.forEach((item, index) => {
      // 사용할 path 지정
      const path = `${item.categores}/${item.subject}`;
      const regx = /tsx$/;
      const isTsx = regx.test(item.origin);
      testKeyArray.current.push(item.origin);
      if (!resultObject[path]) resultObject[path] = [];
      if (isTsx) {
        resultObject[path].push(
          <Linkwarp key={item.origin}>
            <Pretendard size="18px" weight={500} key={`title${item.origin}`}>
              {/* 제목 */}
              {nameExport(item.origin)}
              {/* 웹사이트 내에서 이동 */}
              <IconLinkBox
                to={`/learn/${item.path}`}
                key={`/learn/${item.origin}`}
                size={32}
                title="블로그 링크"
              >
                <BiLogInCircle />
              </IconLinkBox>
              {/* github 링크 */}
              <IconBlackLink
                to={`${gitLink}${item.origin}`}
                key={`${gitLink}${item.origin}`}
                size={32}
                title="github 링크"
              >
                <BiCodeBlock />
              </IconBlackLink>
              {/* vscode 링크 */}
              <IconBlackLink
                to={`${vscodeURI}${item.origin}`}
                key={`${vscodeURI}${item.origin}`}
                size={32}
                title="vscode 링크"
              >
                <BiEdit />
              </IconBlackLink>
            </Pretendard>
          </Linkwarp>
        );
      } else {
        // md 파일
        resultObject[path].push(
          <Linkwarp key={item.origin}>
            <Pretendard size="18px" weight={500} key={`title${item.origin}`}>
              {/* 제목 */}
              {nameExport(item.origin)}.md
              {/* 웹사이트 내에서 이동 */}
              <IconLinkBox
                to={`/learn/${item.path}`}
                size={32}
                title="블로그는 작업 중"
              >
                <BiLinkExternal />
              </IconLinkBox>
              {/* github 링크 */}
              <IconBlackLink
                to={`${gitLink}${item.origin}`}
                size={32}
                title="github 링크"
              >
                <BiCodeBlock />
              </IconBlackLink>
              {/* 옵시디언 링크 */}
              <IconBlackLink
                to={`obsidian://open?vault=react-playground&file=${item.origin}`}
                size={32}
                title="옵시디언 링크"
              >
                <BiFile />
              </IconBlackLink>
            </Pretendard>
          </Linkwarp>
        );
      }
    });

    return resultObject;
  };

  useEffect(() => {
    setIndex((state) => indexComponentGen(state, components));
    setIndex((state) => indexComponentGen(state, markdowns));
  }, []);

  useEffect(() => {
    // index 가 컨텐츠여서 렌더링이 늦게 되는데
    // hash가 있으면 업데이트된 후 실행되서 갈 수 있도록 함
    if (hash) {
      gotoID(hash);
    }
  }, [index]);

  return (
    <Main>
      <MainWarp>
        {Object.keys(index).map((item) => (
          <Menu key={item}>
            <SubjectTitle
              id={item.split('/').join('-')}
              size="20px"
              weight={700}
            >
              {item}
              {/* 웹사이트 내에서 이동 */}
              <IconLinkBox to={`/learn/${item}`} size={32} title="블로그 링크">
                <BiLogInCircle />
              </IconLinkBox>
            </SubjectTitle>
            <hr />
            {index[item]}
          </Menu>
        ))}
      </MainWarp>
      <StickyWarp>
        {/* vscode 프로젝트 폴더 먼저 열기 */}

        <Pretendard size="18px" weight={800}>
          # index
        </Pretendard>
        <Pretendard size="18px" weight={600}>
          vscode 프로젝트 열기
          <IconBlackLink to={`${vscodeURI}`} title="vscode 링크">
            <BiCodeBlock />
          </IconBlackLink>
        </Pretendard>

        <IndexWarp>
          {Object.keys(index).map((item) => (
            <Linkwarp
              key={item}
              onClick={() => {
                navigator(`/indexing/#${item.split('/').join('-')}`);
                // 별개로 실행해줘야 함
                gotoID(`#${item.split('/').join('-')}`);
              }}
            >
              {item}
            </Linkwarp>
          ))}
        </IndexWarp>
      </StickyWarp>
    </Main>
  );
};

export default App;

const Main = styled(MaxWidthStyle.withComponent('main'))`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const MainWarp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const StickyWarp = styled(MainWarp)`
  top: 120px;
  position: sticky;
  display: flex;
  flex-direction: column;
  border: 2px dashed ${colors.Gray01};
  padding: 16px;
  box-sizing: border-box;

  justify-content: flex-start;
  align-items: flex-start;
  max-height: calc(100vh - 120px);
  overflow-x: hidden;
  overflow-y: scroll;

  // firefox
  scrollbar-color: ${colors.Gray01} transparent;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    // 트랙
    background-color: transparent;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    // 안쪽
    background-color: ${colors.Gray01};
    border-radius: 4px;
  }
`;

const IndexWarp = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;
  max-height: 100%;
  flex-wrap: wrap;
`;

const Menu = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  padding: 8px 0px;
`;

const Linkwarp = styled(Pretendard)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-bottom: 2px solid #fff;

  height: 32px;
  padding: 0px 8px;
  :hover {
    border-bottom: 2px solid ${colors.Black};
    background-color: ${colors.White};
  }
`;

const SubjectTitle = styled(Pretendard.withComponent('h2'))``;
