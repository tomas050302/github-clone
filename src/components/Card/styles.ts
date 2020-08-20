import styled from 'styled-components';

import { Repositories } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 444px;
  border: 1px solid var(--light-text);
  border-radius: 8px;

  padding: 10px 15px;
`;

export const FirstRow = styled.div`
  display: flex;

  align-items: center;
`;

export const RepositoryIcon = styled(Repositories)`
  width: 16px;
  height: 20px;

  flex-shrink: 0;
  fill: var(--icon-light);
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 15px;

  margin-left: 8px;

  color: var(--link);
`;

export const Description = styled.div``;

export const Stats = styled.div``;

export const TechnologyColor = styled.div``;

export const TechnologyName = styled.div``;

export const Stat = styled.div``;

export const StarIcon = styled.div``;

export const ForkIcon = styled.div``;
