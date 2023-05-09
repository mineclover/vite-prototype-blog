import styled from 'styled-components';
import { BiChevronLeft } from 'react-icons/bi';
import colors from '@/global/colors';

const index = () => {
  return (
    <SidebarRoot>
      <SidebarSwitch>
        <BiChevronLeft color={colors.Black} />
      </SidebarSwitch>
      테스트 작성
    </SidebarRoot>
  );
};

export default index;

const width = '300px';

const SidebarRoot = styled.aside`
  position: fixed;
  top: 50%;
  right: -${width};
  z-index: 100;
  width: ${width};
  height: ${width};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transform: translateY(-50%);
  transition-timing-function: ease-out;
  transition-duration: 300ms;

  background: #ff0;
  :hover {
    background: #0ff;
    transform: translateX(-${width}) translateY(-50%);
  }
`;

const SidebarSwitch = styled.div`
  position: absolute;
  top: 50%;
  left: -32px;
  width: 32px;
  height: 64px;
  border-radius: 32px 0px 0px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  transform: translateY(-50%);
  background: #fff;
  border: 2px solid ${colors.Black};
  border-right: none;
`;
