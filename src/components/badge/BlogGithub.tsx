import { VscGithub } from 'react-icons/vsc';
import styled from 'styled-components';
import { Jamsil } from '@/global/styleUtils';
import colors from '@/global/colors';

const BlogGithub = () => {
  return (
    <Button
      href="https://github.com/mineclover/vite-prototype-blog"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Jamsil size="16px" weight={400}>
        Github
      </Jamsil>

      <LinkIcon>
        <VscGithub />
      </LinkIcon>
    </Button>
  );
};

export default BlogGithub;

const Button = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex: none;
  gap: 8px;

  box-shadow: 0px 0px 2px ${colors.Black};
  shodow: 0 0 0 0 ${colors.Black};
  border-radius: 100px;
  padding: 0 4px 0px 12px;
  height: 32px;
  :hover {
    cursor: pointer;
    background-color: ${colors.Signature};
  }
  :hover svg {
    color: ${colors.White} !important;
  }
  :hover div {
    color: ${colors.White};
  }
`;

const LinkIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
