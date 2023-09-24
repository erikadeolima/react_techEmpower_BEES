import { Theme } from '@/Context/ContextTypes';
import styled from 'styled-components';

export const HomeContainer = styled.div<{ theme: Theme }>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 20px;

  background-color: ${props => (props.theme === 'light' ? 'rgb(128, 128, 128)' : 'black')};
`;