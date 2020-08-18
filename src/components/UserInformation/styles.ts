import styled from 'styled-components';

import { Emoji } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 95%;
  margin: 20px auto 0;

  @media (min-width: 768px) {
    width: 320px;
  }
`;

export const UserContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;

  margin: 5px 12px;
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

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const EmojiIcon = styled(Emoji)`
  fill: #fee133;

  width: 15px;
  height: 15px;
  flex-shrink: 0;
`;

export const UserAvatar = styled.div`
  width: 85px;
  height: 85px;

  border-radius: 50%;
  background: var(--content);
`;

export const UsernamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  margin-top: -5px;

  justify-content: center;
`;

export const UserName = styled.div`
  color: var(--text);
  font-weight: 600;

  font-size: 23px;
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

  color: var(--text);

  font-size: 14px;

  padding: 5px 0;
`;

export const FollowStats = styled.div``;

export const Stat = styled.div``;

export const PersonsIcon = styled.div``;

export const Dot = styled.div``;

export const StarIcon = styled.div``;

export const UserInformations = styled.div``;

export const Info = styled.div``;

export const CompanyIcon = styled.div``;

export const LocationIcon = styled.div``;

export const MailIcon = styled.div``;

export const TwitterIcon = styled.div``;

export const HighlightsContainer = styled.div``;

export const Hightlight = styled.div``;

export const ProBadge = styled.div``;
