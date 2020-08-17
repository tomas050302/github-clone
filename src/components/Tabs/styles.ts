import styled, { css } from 'styled-components';

import { Book, Repositories, Projects, Cube } from '../../styles/Icons';

export const Container = styled.div`
  width: 100vw;

  border-bottom: var(--light-primary);
`;

export const Wrapper = styled.div`
  width: calc(100% - min(20%, 320px));
  margin-left: min(20%, 320px);
`;

export const Tab = styled.div``;

const iconCSS = css`
  width: 32px;
  height: 32px;
`;

export const BookIcon = styled(Book)`
  ${iconCSS}
`;

export const RepositoriesIcon = styled(Repositories)`
  ${iconCSS}
`;

export const ProjectsIcon = styled(Projects)`
  ${iconCSS}
`;

export const PackagesIcon = styled(Cube)`
  ${iconCSS}
`;
