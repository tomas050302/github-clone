import React from 'react';

import {
  Container,
  PinsRow,
  CardsContainer,
  Card,
  ContributionsContainer,
  ContributionGraph,
  ContributionYears,
  Year,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <PinsRow>
        <span>Pinned</span>

        <span>Customize your pins</span>
      </PinsRow>

      <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
