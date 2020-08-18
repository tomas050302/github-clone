import styled, { css } from 'styled-components';

import {
  Emoji,
  Group,
  Envelope,
  Company,
  LocationMarker,
  Twitter,
  Star,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 380px;
    position: absolute;
    left: 0;
    top: calc(42px + 59px);

    padding: 10px 50px;
  }
`;

export const UserContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;

  margin: 5px 12px;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const State = styled.div`
  border: 1px solid var(--light-text);

  border-radius: 8px;

  padding: 5px;

  margin-top: 20px;

  display: flex;

  align-items: center;

  > span {
    margin-left: 8px;
    color: var(--text);

    font-size: 13px;
  }
  @media (min-width: 768px) {
    > span {
      display: none;
    }

    border: 0;

    position: absolute;
    top: 200px;
    right: 55px;
    background: var(--white);

    border-radius: 50%;
    border-shadow: 8px;
  }
`;

export const EmojiIcon = styled(Emoji)`
  fill: #fee133;

  width: 18px;
  height: 18px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    height: 22px;
    width: 22px;
  }
`;

export const UserAvatar = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background: var(--content);

  @media (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

export const UsernamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  margin-top: -5px;

  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 10px;
    margin-left: 0;
    align-self: flex-start;
  }
`;

export const UserName = styled.div`
  color: var(--text);
  font-weight: 600;

  font-size: 23px;

  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

export const UserNickname = styled.div`
  color: var(--secondary-text);
  font-size: 19px;
`;

export const UserBio = styled.span`
  color: var(--text);

  margin: 15px 2px;
`;

export const EditInfoButton = styled.button`
  border: 1px solid var(--light-text);

  border-radius: 8px;

  background: var(--button-background);
  color: var(--text);

  font-size: 14px;

  padding: 5px 0;

  cursor: pointer;

  &:hover {
    background: var(--button-hover);
  }
`;

export const Informations = styled.div`
  display: flex;

  flex-direction: column;
`;

export const FollowStats = styled.div`
  display: flex;

  align-items: center;

  margin-top: 8px;

  order: 2;

  @media (min-width: 768px) {
    order: 1;
  }
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  strong {
    color: var(--text);
    margin-right: 3px;
  }

  > span {
    color: var(--secondary-text);
  }

  > span,
  strong {
    font-size: 15px;
  }

  margin: 0 5px 0 0;

  & + div {
    margin-right: 5px;
  }

  &:hover {
    > span,
    strong {
      color: var(--link);
    }

    > svg {
      fill: var(--link);
    }
  }
`;

const iconCSS = css`
  width: 18px;
  height: 18px;

  flex-shrink: 0;

  fill: var(--icon-light);
`;

export const PersonsIcon = styled(Group)`
  ${iconCSS}
`;

export const Dot = styled.div`
  width: 3px;
  height: 3px;

  flex-shrink: 0;

  border-radius: 50%;

  background: var(--primary);
`;

export const StarIcon = styled(Star)`
  ${iconCSS}
`;

export const UserInformations = styled.div`
  display: flex;
  margin-top: 15px;

  order: 1;

  @media (min-width: 768px) {
    order: 2;

    flex-direction: column;

    margin-bottom: 20px;
  }
`;

export const Info = styled.div`
  display: none;
  > span {
    color: var(--text);
    margin-left: 3px;
    font-size: 14px;
  }

  &.email {
    display: flex;

    align-items: center;
  }

  @media (min-width: 768px) {
    display: inline;

    margin-top: 5px;

    > span {
      font-size: 15px;
    }
  }
`;

export const CompanyIcon = styled(Company)`
  ${iconCSS}
`;

export const LocationIcon = styled(LocationMarker)`
  ${iconCSS}
`;

export const MailIcon = styled(Envelope)`
  ${iconCSS}
`;

export const TwitterIcon = styled(Twitter)`
  ${iconCSS}
`;

export const HighlightsContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--lines);

    padding-top: 20px;

    > strong {
      font-size: 17px;

      color: var(--text);
    }
  }
`;

export const Hightlight = styled.div`
  margin-top: 10px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 5px;
  }

  > span {
    color: var(--text);
    font-size: 14px;

    margin-left: 3px;
  }
`;

export const ProBadge = styled.div`
  border: 1px solid var(--lines);
  margin-left: 3px;

  padding: 0 8px;

  border-radius: 12px;

  > span {
    width: 100%;
    font-size: 12px;
    color: var(--text);
  }
`;
