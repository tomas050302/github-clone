import React from 'react';

import { Container, Wrapper } from './styles';

import TopBar from '../TopBar';
import Tabs from '../Tabs';
import SideBar from '../SideBar';
import Main from '../Main';

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Wrapper>
        <Tabs>
          <SideBar />
          <Main />
        </Tabs>
      </Wrapper>
    </Container>
  );
};

export default Layout;
