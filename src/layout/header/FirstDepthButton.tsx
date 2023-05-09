import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Jamsil } from '@/global/styleUtils';
import colors from '@/global/colors';

interface Props {
  to: string;
  children: React.ReactNode;
}

const FirstDepthButton = ({ to, children }: Props) => {
  return (
    <Link to={to}>
      <Button>
        <Jamsil size="20px" weight={500}>
          {children}
        </Jamsil>
      </Button>
    </Link>
  );
};

export default FirstDepthButton;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  padding: 12px 24px;
  margin: 0px;

  transition-timing-function: ease-out;
  transition-duration: 300ms;

  background: #ffffff;
  border-radius: 100px;
  :hover {
    background: ${colors.Gray01};
    transition-timing-function: ease-out;
    padding: 8px 16px;
    margin: 4px 8px;
    transition-duration: 300ms;
  }
  :active {
    background: ${colors.Gray02};
    outline: 1px solid ${colors.Gray02};
    transition-timing-function: ease-out;
    transition-duration: 300ms;
  }
`;
