import React from 'react';

import ArticVaultIcon from '../ArticVaultIcon';

import {
  Container,
  UserContainer,
  UserAvatar,
  State,
  EmojiIcon,
  UsernamesContainer,
  UserName,
  UserNickname,
  UserBio,
  EditInfoButton,
  Informations,
  FollowStats,
  Stat,
  PersonsIcon,
  Dot,
  StarIcon,
  UserInformations,
  Info,
  CompanyIcon,
  LocationIcon,
  MailIcon,
  TwitterIcon,
  HighlightsContainer,
  Hightlight,
  ProBadge,
} from './styles';

const UserInformation: React.FC = () => {
  return (
    <Container>
      <UserContainer>
        <UserAvatar />
        <UsernamesContainer>
          <UserName>Tomás Lopes</UserName>
          <UserNickname>tomas050302</UserNickname>
        </UsernamesContainer>
      </UserContainer>
      <State>
        <EmojiIcon />
        <span>Focusing</span>
      </State>
      <UserBio>
        Student | 18 Years | Informática e Tecnologias Multimédia
      </UserBio>
      <EditInfoButton>Edit Profile</EditInfoButton>

      <Informations>
        <UserInformations>
          <Info>
            <CompanyIcon />
            <span>Colégio de Gaia</span>
          </Info>

          <Info>
            <LocationIcon />
            <span>Espinho, Portugal</span>
          </Info>

          <Info className='email'>
            <MailIcon />
            <span>tomas050302@gmail.com</span>
          </Info>

          <Info>
            <TwitterIcon />
            <span>tomas050302</span>
          </Info>
        </UserInformations>

        <FollowStats>
          <Stat className='email'>
            <PersonsIcon />
            <strong>17 </strong>
            <span>followers</span>
          </Stat>
          <Dot />
          <Stat>
            <strong>14 </strong>
            <span>following</span>
          </Stat>
          <Dot />
          <Stat>
            <StarIcon />
            <strong>45</strong>
          </Stat>
        </FollowStats>
      </Informations>

      <HighlightsContainer>
        <strong>Highlights</strong>

        <Hightlight>
          <ArticVaultIcon />
          <span>Arctic Code Vault Contributor </span>
        </Hightlight>

        <Hightlight>
          <StarIcon />
          <ProBadge>
            <span>PRO</span>
          </ProBadge>
        </Hightlight>
      </HighlightsContainer>
    </Container>
  );
};

export default UserInformation;
