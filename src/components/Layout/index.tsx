import React from 'react';

import { Container, Wrapper } from './styles';

import TopBar from '../TopBar';
import Main from '../Main';

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Wrapper>
        <Main />
      </Wrapper>
    </Container>
  );
};

export default Layout;
