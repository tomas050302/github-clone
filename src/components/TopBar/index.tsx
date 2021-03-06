import React from 'react';

import {
  Container,
  MobileActions,
  HamburgerIcon,
  Actions,
  GithubIcon,
  SearchInputContainer,
  SearchInput,
  SearchIcon,
  MenuOption,
  UserInfo,
  NotificationsIcon,
  AddContainer,
  AddIcon,
  DownArrowIcon,
  UserAvatarContainer,
  UserAvatar,
} from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
      <MobileActions>
        <HamburgerIcon />
        <GithubIcon />
        <NotificationsIcon />
      </MobileActions>

      <Actions>
        <GithubIcon />
        <SearchInputContainer>
          <SearchInput placeholder='Search or jump to...' />
          <SearchIcon src='https://github.githubassets.com/images/search-key-slash.svg' />
        </SearchInputContainer>
        <MenuOption>Pull Requests</MenuOption>
        <MenuOption>Issues</MenuOption>
        <MenuOption>Marketplace</MenuOption>
        <MenuOption>Explore</MenuOption>
      </Actions>

      <UserInfo>
        <NotificationsIcon />
        <AddContainer>
          <AddIcon>+</AddIcon>
          <DownArrowIcon />
        </AddContainer>

        <UserAvatarContainer>
          <UserAvatar />
          <DownArrowIcon />
        </UserAvatarContainer>
      </UserInfo>
    </Container>
  );
};

export default TopBar;
