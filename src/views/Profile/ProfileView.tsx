import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../components/colors'
import { Profile } from '../../interfaces/profile.interface'
import { Theme } from '../../interfaces/Theme.interface'
import ProfileInfo from './ProfileInfo'

import ProfileViewHeader, { ProfileViewHeaderProps } from './ProfileViewHeader'

export interface ProfileViewProps {
  header: Omit<ProfileViewHeaderProps, 'mode'>
  size: 'small' | 'large'
  mode: Theme['mode']
  profile: Profile
}

const StyledProfileView = styled.div`
  & > div {
    border-bottom: 1px solid ${COLORS.GRAY4};

    &:last-child {
      border: transparent;
    }
  }
`

const ProfileView: React.FC<ProfileViewProps> = ({ header, size, mode, profile }) => {
  return (
    <StyledProfileView>
      <ProfileViewHeader {...header} mode={mode} />
      <ProfileInfo 
        label="photo"
        detail={{ image: profile.image }}
        size={size}
        mode={mode}
      />
      <ProfileInfo 
        label="Name"
        detail={{ text: profile.name }}
        size={size}
        mode={mode}
      />
      <ProfileInfo label="bio" detail={{ text: profile.bio }}
        mode={mode} size={size}
      />
      <ProfileInfo 
        label="phone"
        detail={{ text: profile.phone }}
        mode={mode} size={size}
      />
      <ProfileInfo 
        label="email"
        detail={{ text: profile.email }}
        mode={mode} size={size}
      />
      <ProfileInfo 
        label="password"
        detail={{ 
          text: profile.password
            .split('')
            .map(_ => '*')
            .join('')
        }}
        mode={mode}
        size={size}
      />
    </StyledProfileView>
  )
}

export default ProfileView