import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from '@/global/colors';

interface Props {
  children: string | string[];
  to: string;
}

const LabelLink = ({ children, to }: Props) => {
  const navigator = useNavigate();
  const title = location.origin + to;

  return (
    <LinkBook
      onClick={() => {
        navigator(to);
      }}
      title={title}
    >
      {children}
    </LinkBook>
  );
};

export default LabelLink;

const LinkBook = styled.div`
  cursor: pointer;
  white-space: nowrap;
  :hover {
    background-color: ${colors.Gray02};
  }
`;
