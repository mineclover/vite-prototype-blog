import styled from 'styled-components';
import colors from './colors';

export const MaxWidthStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
  width: 100%;
  max-width: 1136px;
`;

interface FontProps {
  color?: string;
  size?: string;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export const Pretendard = styled.span<FontProps>`
  font-family: 'Pretendard';
  font-style: normal;
  display: flex;
  align-items: center;

  font-weight: ${(props) => props.weight || 400};
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || colors.Black};
`;

export const Jamsil = styled.div<FontProps>`
  font-family: '잠실체';
  font-style: normal;
  display: flex;
  align-items: center;

  font-weight: ${(props) => props.weight || 400};
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || colors.Black};
`;
