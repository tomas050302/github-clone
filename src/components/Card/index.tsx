import React from 'react';

import {
  Container,
  FirstRow,
  RepositoryIcon,
  Name,
  Description,
  Stats,
  TechnologyColor,
  TechnologyName,
  Stat,
  StarIcon,
  ForkIcon,
} from './styles';

import DraggableIcon from '../DraggableIcon';

interface Props {
  name: string;
  description: string;
  technology: string;
  stars?: number;
  forks?: number;
}

const Card: React.FC<Props> = ({
  name,
  description,
  technology,
  stars,
  forks,
}) => {
  return (
    <Container>
      <FirstRow>
        <RepositoryIcon />
        <Name>{name}</Name>
        <DraggableIcon />
      </FirstRow>

      <Description>{description}</Description>

      <Stats>
        <TechnologyColor />
        <TechnologyName>{technology}</TechnologyName>

        {stars && (
          <Stat>
            <StarIcon />
            <span>{stars}</span>
          </Stat>
        )}

        {forks && (
          <Stat>
            <ForkIcon />
            <span>{forks}</span>
          </Stat>
        )}
      </Stats>
    </Container>
  );
};

export default Card;
