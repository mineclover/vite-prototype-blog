import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BiChevronRight, BiBookOpen } from 'react-icons/bi';
import colors from '../../global/colors';
import { Jamsil } from '../../global/styleUtils';

interface Props {
  children: string;
  path: string;
  to: string;
}
const App = ({ children, path, to }: Props) => {
  const state = children.toLowerCase() === path;
  const navigator = useNavigate();
  // 같은 지 비교하는 상태 값 .. props로 업데이트되서 그냥 냅둠

  const redirectURL = `/learn/${to.toLowerCase()}`;

  return (
    <SubMenuText
      size="16px"
      weight={400}
      select={state}
      onClick={() => {
        navigator(`${redirectURL}`);
      }}
    >
      {children}
      {state ? <BiBookOpen className="state" size="18px" /> : null}
      <BiChevronRight size="16px" />
    </SubMenuText>
  );
};

export default App;

interface plus {
  select?: boolean;
}

const SubMenuText = styled(Jamsil)<plus>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  padding: 5px 10px;
  gap: 4px;

  transition-duration: 300ms;
  background: ${(props) => (props.select ? '#ffffff' : 'transparent')};
  border-left: ${(props) =>
    props.select ? `2px solid ${colors.Black}` : 'none'};

  svg {
    position: absolute;
    right: 0;
    opacity: 0;
    margin-right: 16px;
    transition-duration: 500ms;
  }
  svg.state {
    opacity: 1;
    margin-right: 0px;
  }
  :hover {
    padding: 5px 20px;
    background: #e0e0e0;
    color: ${colors.Signature};
  }
  :hover > svg {
    opacity: 1;
    margin-right: 0px;
    color: ${colors.Signature} !important;
  }
`;
