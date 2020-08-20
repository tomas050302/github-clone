import styled, { css } from 'styled-components';

import { Book, Repositories, Chart, Cube } from '../../styles/Icons';

export const Container = styled.div`
  width: 99vw;

  height: 34px;
  margin-top: 42px;

  border-bottom: 1px solid var(--lines);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  margin-left: 25px;

  @media (min-width: 768px) {
    margin-left: calc(min(20%, 320px) + 100px);
  }
`;

export const Tab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: -15px;
  padding: 22px 18px 25px;

  cursor: pointer;

  height: 34px;

  > span {
    color: var(--text);
    font-size: 14px;

    margin-left: 8px;
  }

  &.active {
    border-bottom: 2px solid var(--highlight);

    > span {
      font-weight: bold;
    }

    > .tabIcon {
      fill: var(--primary);
    }

    > .packages > path {
      fill: var(--primary);
    }
  }
`;

const iconCSS = css`
  height: 20px;
  width: 20px;

  flex-shrink: 0;

  fill: var(--icon);
`;

export const BookIcon = styled(Book)`
  ${iconCSS}
`;

export const RepositoriesIcon = styled(Repositories)`
  ${iconCSS}
`;

export const ProjectsIcon = styled(Chart)`
  ${iconCSS}

  transform: rotate(180deg);
`;

export const PackagesIcon = styled(Cube)`
  ${iconCSS}

  > path {
    fill: var(--icon);
  }
`;
