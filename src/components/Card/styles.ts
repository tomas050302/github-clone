import styled, { css } from 'styled-components';

import { Repositories, Fork, Star } from '../../styles/Icons';

interface Props {
  technology: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(444px, 45%);
  border: 1px solid var(--light-text);
  border-radius: 8px;

  padding: 10px 25px;

  margin: 0 10px 15px 10px;

  &:nth-child(1),
  &:nth-child(2) {
    margin-top: 15px;
  }
`;

export const FirstRow = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
`;

export const Title = styled.div`
  display: flex;
`;

export const RepositoryIcon = styled(Repositories)`
  width: 16px;
  height: 20px;

  flex-shrink: 0;
  fill: var(--icon-light);
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 14px;

  margin-left: 8px;

  color: var(--link);
`;

export const Description = styled.span`
  color: var(--secondary-text);
  font-size: 12px;
`;

export const Stats = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 40%;
`;

export const TechnologyColor = styled.div<Props>`
  width: 8px;
  height: 8px;

  flex-shrink: 0;
  border-radius: 50%;

  background: ${props =>
    props.technology === 'JavaScript' && 'var(--javascript)'};
  background: ${props => props.technology === 'HTML' && 'var(--html)'};
  background: ${props => props.technology === 'CSS' && 'var(--css)'};
  background: ${props =>
    props.technology === 'TypeScript' && 'var(--typescript)'};
  background: ${props => props.technology === 'PHP' && 'var(--php)'};
  background: ${props => props.technology === 'C#' && 'var(--c-sharp)'};
`;

export const Technology = styled.div`
  display: flex;

  align-items: center;
`;

export const TechnologyName = styled.span`
  font-size: 14px;
  color: var(--third-text);

  margin-left: 5px;
`;

export const Stat = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  > span {
    color: var(--secondary-text);
    font-size: 13px;
  }

  &:hover {
    > span {
      color: var(--link);
    }

    > svg {
      fill: var(--link);
    }
  }
`;

const iconCSS = css`
  height: 15px;
  width: 15px;

  flex-shrink: 0;
  fill: var(--icon-light);
`;

export const StarIcon = styled(Star)`
  ${iconCSS}
`;

export const ForkIcon = styled(Fork)`
  ${iconCSS}
`;
