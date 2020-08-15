import styled, { css } from 'styled-components';

import { Github, Bell, CaretDown, Menu } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary);
  height: 80px;
`;

export const MobileActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100vw;

  @media (min-width: 768px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 35px;
  height: 35px;
  color: var(--white);

  > svg {
    fill: var(--white);
  }
`;

export const HamburgerIcon = styled(Menu)`
  ${iconCSS}
`;

export const Actions = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const GithubIcon = styled(Github)`
  ${iconCSS}
`;

export const SearchInputContainer = styled.div`
  width: 260px;
  height: 30px;

  background: var(--light-primary);
  border-radius: 5px;
  padding: 3px 8px;

  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;

  &::placeholder {
    color: var(--light-text);
  }
`;

export const SearchIcon = styled.span`
  position: absolute;

  color: var(--light-text);
  right: 5px;
  border: 1px solid var(--light-text);
  border-radius: 5px;
  padding: 5px 8px;
  font-size: 10px;
`;

export const MenuOption = styled.span`
  font-size: 16px;
  color: var(--white);
  margin-right: 10px;

  .pulls {
    content: 'Pulls';
  }
`;

export const UserInfo = styled.div`
  display: none;
`;

export const NotificationsIcon = styled(Bell)`
  ${iconCSS}
`;

export const AddContainer = styled.div``;

export const AddIcon = styled.span``;

export const DownArrowIcon = styled(CaretDown)``;

export const UserAvatarContainer = styled.div``;

export const UserAvatar = styled.div``;
