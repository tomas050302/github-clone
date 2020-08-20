import React from 'react';

import { Container, Wrapper, MainContainer } from './styles';

import TopBar from '../TopBar';
import Tabs from '../Tabs';
import UserInformation from '../UserInformation';
import Main from '../Main';

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Wrapper>
        <MainContainer>
          <UserInformation />
          <Tabs />
          <Main />
        </MainContainer>
      </Wrapper>
    </Container>
  );
};

export default Layout;
