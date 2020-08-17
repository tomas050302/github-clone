import React from 'react';

import {
  Container,
  Wrapper,
  Tab,
  BookIcon,
  RepositoriesIcon,
  ProjectsIcon,
  PackagesIcon,
} from './styles';

const Tabs: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Tab className='active'>
          <BookIcon />
          Overview
        </Tab>
        <Tab>
          <RepositoriesIcon />
          Repositories
        </Tab>
        <Tab>
          <ProjectsIcon />
          Projects
        </Tab>
        <Tab>
          <PackagesIcon />
          Packages
        </Tab>
      </Wrapper>
    </Container>
  );
};

export default Tabs;
