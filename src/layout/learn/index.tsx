import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BiLink } from 'react-icons/bi';
import { MaxWidthStyle, Pretendard, Jamsil } from '@/global/styleUtils';
import colors from '@/global/colors';
import { useEffect } from 'react';
import LinkBook from './LabelLink';
import CopyButton from './CopyButton';
import Sidebar from '../sidebar';

const App = () => {
  const { pathname, hash } = useLocation();

  const pathRex = /\/$/g;
  const pathArray = pathname.replace(pathRex, '').split('/');
  if (hash) {
    pathArray.push(hash);
    console.log('🚀 ~ file: index.tsx:16 ~ App ~ pathArray:', pathArray);
  }

  const PathNav = pathArray.map((path, index, arr) => {
    // 링크 만들어서 부여하는 부분
    if (index === 0) {
      return (
        <LinkBook to="/" key={index}>
          {location.origin}
        </LinkBook>
      );
    }
    const result = arr.slice(0, index + 1).join('/');

    return (
      <LinkBook to={result} key={index}>
        /{path}
      </LinkBook>
    );
  });

  return (
    <>
      <HeaderRoot>
        <HeaderMaxWidth>
          <Pretendard>
            <BiLink />
            {PathNav}
            <CopyButton text={location.origin + pathname} />
          </Pretendard>
        </HeaderMaxWidth>
      </HeaderRoot>
      <Sidebar />
    </>
  );
};

export default App;

const HeaderRoot = styled.nav`
  position: fixed;
  top: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 40px;
  background: #ffffff;
  border-bottom: 2px solid #222222;
`;

const HeaderMaxWidth = styled(MaxWidthStyle)``;
