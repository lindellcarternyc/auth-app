import React from 'react'
import styled from 'styled-components'

import { SocialProfile } from './types'
import { SocialIcon } from './SocialIcon'
import BaseButton from '../BaseButton'

export interface SocialButtonProps {
  profile: SocialProfile
  onClick?: () => void
}

const SocialButtonWrapper = styled(BaseButton)`
  background-color: transparent;
  width: 42px; height: 42px;
  position: relative;
  box-sizing: border-box;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  & > * {
    width: 42px;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 40px;
    height: 40px;
  }
`

const SocialButton: React.FC<SocialButtonProps> = ({ profile, onClick }) => {
  return (
    <SocialButtonWrapper onClick={onClick}>
      {SocialIcon(profile)}
    </SocialButtonWrapper>
  )
}

export default SocialButton