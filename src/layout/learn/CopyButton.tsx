import styled from 'styled-components';
import { BiShareAlt } from 'react-icons/bi';
import { Pretendard } from '@/global/styleUtils';
import colors from '@/global/colors';

interface Props {
  text: string;
}

const CopyButton = ({ text }: Props) => {
  return (
    <ButtonMargin>
      <Button
        onClick={() => {
          console.log('복사할 텍스트', text);
        }}
      >
        <Pretendard size="12px" weight={600}>
          <BiShareAlt size="14px" />
          공유하기
        </Pretendard>
      </Button>
    </ButtonMargin>
  );
};

export default CopyButton;

const ButtonMargin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;

  cursor: pointer;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 12px;
  outline: none;
  border: none;

  background: ${colors.Gray01};
  border-radius: 24px;
  :hover {
    background-color: ${colors.Gray02};
  }
`;
