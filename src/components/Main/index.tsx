import React from 'react';

import {
  Container,
  PinsRow,
  CardsContainer,
  ContributionsContainer,
  ContributionGraph,
  ContributionYears,
  Year,
} from './styles';

import Card from '../Card';

const Main: React.FC = () => {
  return (
    <Container>
      <PinsRow>
        <span>Pinned</span>

        <span>Customize your pins</span>
      </PinsRow>

      <CardsContainer>
        <Card
          name='test'
          description='A test project'
          technology='JavaScript'
          stars={5}
          forks={2}
        />
        <Card
          name='test'
          description='A test project'
          technology='TypeScript'
        />
        <Card
          name='test'
          description='A test project'
          technology='JavaScript'
        />
        <Card name='test' description='A test project' technology='HTML' />
        <Card
          name='test'
          description='A test project'
          technology='JavaScript'
        />
        <Card
          name='test'
          description='A test project'
          technology='JavaScript'
        />
      </CardsContainer>

      <ContributionsContainer>
        <ContributionGraph></ContributionGraph>

        <ContributionYears>
          <Year>2020</Year>
          <Year>2019</Year>
        </ContributionYears>
      </ContributionsContainer>
    </Container>
  );
};

export default Main;
