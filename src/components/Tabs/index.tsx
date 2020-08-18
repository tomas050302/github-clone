import React, { useState } from 'react';

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
  const [active, setActive] = useState('overview');

  function setActiveTab(tabName: string) {
    setActive(tabName);
  }

  return (
    <Container>
      <Wrapper>
        <Tab
          className={active === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          <BookIcon className='tabIcon' />
          <span>Overview</span>
        </Tab>
        <Tab
          className={active === 'repositories' ? 'active' : ''}
          onClick={() => setActiveTab('repositories')}
        >
          <RepositoriesIcon className='tabIcon' />
          <span>Repositories</span>
        </Tab>
        <Tab
          className={active === 'projects' ? 'active' : ''}
          onClick={() => setActiveTab('projects')}
        >
          <ProjectsIcon className='tabIcon' />
          <span>Projects</span>
        </Tab>
        <Tab
          className={active === 'packages' ? 'active' : ''}
          onClick={() => setActiveTab('packages')}
        >
          <PackagesIcon className='tabIcon packages' />
          <span>Packages</span>
        </Tab>
      </Wrapper>
    </Container>
  );
};

export default Tabs;
