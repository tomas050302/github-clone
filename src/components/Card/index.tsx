import React from 'react';

import {
  Container,
  FirstRow,
  Title,
  RepositoryIcon,
  Name,
  Description,
  Stats,
  Technology,
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
        <Title>
          <RepositoryIcon />
          <Name>{name}</Name>
        </Title>
        <DraggableIcon />
      </FirstRow>

      <Description>{description}</Description>

      <Stats>
        <Technology>
          <TechnologyColor technology={technology} />
          <TechnologyName>{technology}</TechnologyName>
        </Technology>
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
