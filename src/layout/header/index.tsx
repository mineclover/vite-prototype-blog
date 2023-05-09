import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import FirstDepthLink from '@/layout/header/FirstDepthButton';
import Logo, { SideLogoBox } from '@/layout/Logo';
import HeaderSubMenu from '@/layout/header/HeaderSubMenu';
import LearnBar from '@/layout/learn';
import BlogGithub from '@/components/badge/BlogGithub';

import { MaxWidthStyle } from '../../global/styleUtils';

const App = () => {
  return (
    <>
      {/* 외부 가이드라인 박스 */}
      <HeaderRoot>
        {/* 실질적 내부 컨텐츠 */}
        <HeaderMaxWidth>
          <Logo />

          <FirstDepthLink to="indexing">{'index'.toUpperCase()}</FirstDepthLink>

          <SideSignBox>
            <BlogGithub />

            {/* <FirstDepthLink to="/">
              <BiUserCircle />
              <Jamsil size="16px" weight={400}>
                로그인
              </Jamsil>
            </FirstDepthLink> */}
          </SideSignBox>
        </HeaderMaxWidth>
        <HeaderSubMenu />
      </HeaderRoot>
      <LearnBar />
      <Outlet />
    </>
  );
};

export default App;

const HeaderRoot = styled.header`
  position: fixed;
  top: 0;
  box-sizing: border-box;

  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 80px;

  background: #ffffff;

  border-width: 2px 0px;
  border-style: solid;
  border-color: #222222;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  :hover > ul {
    width: 100%;
    height: 500px;
    transform: scaleY(1);
    transform-origin: top;
    opacity: 1;
    transition-duration: 500ms;
  }
`;

const HeaderMaxWidth = styled(MaxWidthStyle)`
  height: fit-content;
  justify-content: space-between;
  min-height: 76px;
  gap: 16px;
  padding: 0px 16px;
  flex-wrap: wrap;
`;

const SideSignBox = styled(SideLogoBox)`
  gap: 8px;
`;
