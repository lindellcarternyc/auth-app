import React from 'react'
import styled from 'styled-components'

import SquareImage from '../../components/SquareImage/SquareImage'
import { COLORS } from '../../components/colors'
import { Theme } from '../../interfaces/Theme.interface'

const StyledProfileInfo = styled.div<{ size: 'small' | 'large', mode: Theme['mode'], isImage: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ isImage }) => {
    if (isImage) return '0.5rem 1rem'
    return '1rem 1rem'
  }};
  justify-content: ${({ size }) => {
    if (size === 'small') return 'space-between'
  }};

  label {
    text-transform: uppercase;
    color: ${COLORS.GRAY5};
    font-size: 14px;
    width: 160px;
    display: block;
  }

  p {
    color: ${({ mode }) => {
      if (mode === 'LIGHT') return COLORS.BLACK1
      return COLORS.GRAY4
    }};
    text-align: ${({ size }) => {
      if (size === 'large') return 'right'
      return 'left'
    }};
  }
`

type ProfileDetail = {
  text: string
} | {
  image: string
}

const isImageDetail = (detail: ProfileDetail): detail is { image: string } => {
  return Object.keys(detail).includes('image')
}

export interface ProfileInfoProps {
  label: string
  detail: ProfileDetail
  size: 'small' | 'large'
  mode: Theme['mode']
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ label, detail, size, mode }) => {
  let content: JSX.Element
  if (isImageDetail(detail)) {
    content = <SquareImage src={detail.image} alt="Profile picture" size="large" />
  } else {
    content = <p>{detail.text}</p>
  }
  return (
    <StyledProfileInfo size={size} mode={mode} isImage={isImageDetail(detail)}>
      <label>{label}</label>
      {content}
    </StyledProfileInfo>
  )
}

export default ProfileInfo