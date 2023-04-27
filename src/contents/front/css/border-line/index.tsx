import styled from 'styled-components';
import colors from '@/global/colors';
import { Pretendard, Jamsil } from '@/global/styleUtils';

interface Props {}

const index = (props: Props) => {
  return (
    <BackgroundRoot>
      <Jamsil>border radius</Jamsil>
      <BorderRadiusRoot>
        <BorderRadiusA />
      </BorderRadiusRoot>
    </BackgroundRoot>
  );
};

export default index;

const BackgroundRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
`;

const BorderRadiusRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${colors.White};
`;
const BorderRadiusA = styled.div`
  width: 64px;
  height: 320px;
  background: ${colors.White};
`;
const BorderRadiusB = styled.div``;
