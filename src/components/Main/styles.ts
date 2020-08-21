import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: unset;

  flex-direction: column;
  margin: 20px 60px 0;

  @media (min-width: 768px) {
    margin-left: calc(min(20%, 320px) + 100px);
  }
`;

export const PinsRow = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  > span {
    color: var(--text);
  }

  > span + span {
    cursor: pointer;
    color: var(--light-link);

    font-size: 12px;

    &:hover {
      color: var(--link);
    }
  }
`;

export const CardsContainer = styled.div`
  width: 100%;

  display: flex;
  justify-items: first baseline;
  flex-wrap: wrap;
`;

export const ContributionsContainer = styled.div`
  display: flex;
`;

export const ContributionGraph = styled.div``;

export const ContributionYears = styled.div``;

export const Year = styled.div``;
