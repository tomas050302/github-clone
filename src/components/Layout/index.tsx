import React from 'react';

import { Container, Wrapper } from './styles';

import TopBar from '../TopBar';
import Tabs from '../Tabs';
import UserInformation from '../UserInformation';
import Main from '../Main';

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Wrapper>
        <UserInformation />
        <Tabs />
        <Main />
      </Wrapper>
    </Container>
  );
};

export default Layout;
