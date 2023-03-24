import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import { useEffect } from 'react';
import SubMenuText from '@/layout/header/SubMenuText';
import { useAppSelector } from '@/app/hooks';
import { selectAll } from '@/features/postSlice';
import { Pretendard, Jamsil } from '@/global/styleUtils';
import colors from '@/global/colors';

const App = () => {
  const test = useAppSelector(selectAll);
  console.log('🚀 ~ file: HeaderSubMenu.tsx:17 ~ App ~ test:', test);
  const navigator = useNavigate();

  // url 정보 가져오기
  const { pathname } = useLocation();
  const currentURL = pathname.split('/')[2];

  const subMenu = () => {
    return Object.keys(test).map((category) => (
      <SubMenu key={`${category}-title`}>
        <SubMenuTitle
          size="18px"
          weight={500}
          onClick={() => {
            navigator(`/learn/${category}`);
          }}
        >
          {category.toLocaleUpperCase()}
        </SubMenuTitle>
        {Object.keys(test[category]).map((subject) => (
          <SubMenuText
            key={subject}
            path={currentURL}
            to={`${category}/${subject}`}
          >
            {subject}
          </SubMenuText>
        ))}
      </SubMenu>
    ));
  };

  // url 정보를 기반으로 메뉴 활성화

  return <HeaderSubMenu>{subMenu()}</HeaderSubMenu>;
};

export default App;

const HeaderSubMenu = styled.ul`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 500px;

  background: #f2f2f2;
  border-top: 2px solid #222222;
  border-bottom: 2px solid #222222;
  transform: scaleY(0);
  opacity: 0;
  transform-origin: top;
  transition-duration: 300ms;
`;

const SubMenu = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px 24px 16px;
  width: 240px;
  height: fit-content;
  :hover {
    background: #e9e9e9;
  }
`;

const SubMenuTitle = styled(Jamsil)`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  padding: 5px 10px;

  border-radius: 12px;
  transition-duration: 300ms;
  :hover {
    color: ${colors.Signature};
  }
`;
