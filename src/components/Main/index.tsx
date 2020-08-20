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
        <Card name='test' description='A test project' technology='js' />
        <Card name='test' description='A test project' technology='js' />
        <Card name='test' description='A test project' technology='js' />
        <Card name='test' description='A test project' technology='js' />
        <Card name='test' description='A test project' technology='js' />
        <Card name='test' description='A test project' technology='js' />
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
