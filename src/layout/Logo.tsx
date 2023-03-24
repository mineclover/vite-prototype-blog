import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import colors from '../global/colors';
import { Pretendard } from '../global/styleUtils';

const Logo = () => {
  const navigator = useNavigate();

  return (
    <SideLogoBox title="home" onClick={() => navigator('/')}>
      <Pretendard size="24px" weight={900}>
        Dev
      </Pretendard>
      <Pretendard size="24px" color={colors.Signature} weight={900}>
        .
      </Pretendard>
      <Pretendard size="24px" weight={900}>
        Softer
      </Pretendard>
      <Pretendard size="24px" color={colors.Signature} weight={900}>
        .
      </Pretendard>
    </SideLogoBox>
  );
};

export default Logo;

export const SideLogoBox = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  flex-wrap: nowrap;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
