import styled from 'styled-components';

import { ThreeDotsVertical } from '@styled-icons/bootstrap/';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Icon = styled(ThreeDotsVertical)`
  width: 12px;

  flex-shrink: 0;

  fill: #767d84;

  position: absolute;
  left: 0;

  & + & {
    left: 5px;
  }
`;
