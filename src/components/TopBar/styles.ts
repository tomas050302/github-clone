import styled, { css } from 'styled-components';

import { Github, Bell, CaretDown, Menu } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary);
  height: 59px;
  padding: 0 10px;

  position: sticky;
  top: 0;
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
  width: 36px;
  height: 36px;
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

    width: max(620px, 50%);
  }
`;

export const GithubIcon = styled(Github)`
  ${iconCSS}
`;

export const SearchInputContainer = styled.div`
  width: 270px;
  height: 28px;

  background: var(--input-background);
  border-radius: 5px;
  padding: 3px 8px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;

  &::placeholder {
    font-size: 14px;
    color: var(--light-text);
  }
`;

export const SearchIcon = styled.img`
  position: absolute;

  color: var(--primary);
  right: 5px;
`;

export const MenuOption = styled.span`
  font-size: 14px;
  color: var(--white);
  margin-right: 10px;

  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 120px;
  }
`;

export const NotificationsIcon = styled(Bell)`
  width: 18px;
  height: 18px;
  color: var(--white);

  > svg {
    fill: var(--white);
  }
`;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const AddIcon = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

export const DownArrowIcon = styled(CaretDown)`
  width: 18px;
  height: 18px;
  color: var(--white);

  > svg {
    fill: var(--white);
  }
`;

export const UserAvatarContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const UserAvatar = styled.div`
  width: 22px;
  height: 22px;

  border-radius: 50%;
  background: var(--content);
`;
