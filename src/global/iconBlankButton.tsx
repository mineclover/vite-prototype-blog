import styled from 'styled-components';
import colors from './colors';

type Props = {
  children: React.ReactNode;
  to: string;
  size?: number;
  title?: string;
};

const iconButton = ({
  children,
  to,
  size = 32,
  title = 'title 설정 필요',
}: Props) => {
  return (
    <Areable size={size} title={title}>
      <LinkIcon href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </LinkIcon>
    </Areable>
  );
};

export default iconButton;

// 이걸로 박스 사이즈 조절 ( 애니메이션에 UI가 밀리지 않도록 )
const Areable = styled.div<{ size: number }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  border-radius: 50%;
  :hover {
    cursor: pointer;
    background-color: ${colors.Signature};
  }
  :hover svg {
    color: ${colors.White} !important;
  }
`;

const LinkIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;
