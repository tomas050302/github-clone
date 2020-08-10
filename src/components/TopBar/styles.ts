import styled from 'styled-components';

import { Github, Bell, CaretDown } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary);
  height: 64px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GithubIcon = styled(Github)`
  width: 32px;
  height: 32px;
  color: var(--white);
`;

export const SearchInputContainer = styled.div``;

export const SearchInput = styled.input``;

export const SearchIcon = styled.span``;

export const MenuOption = styled.div``;

export const UserInfo = styled.div``;

export const NotificationsIcon = styled(Bell)``;

export const AddContainer = styled.div``;

export const AddIcon = styled.span``;

export const DownArrowIcon = styled(CaretDown)``;

export const UserAvatarContainer = styled.div``;

export const UserAvatar = styled.div``;
