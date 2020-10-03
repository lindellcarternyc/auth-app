import React from 'react'
import styled from 'styled-components'

import { AiFillCaretDown } from 'react-icons/ai'

import SquareImage from '../../SquareImage/SquareImage'
import RenderIf from '../../RenderIf/RenderIf'
import BaseButton from '../../BaseButton'

export interface MenuToggleProps {
  profile: {
    image: string
    name: string
  }
  active: boolean
  size: 'small' | 'large'
  onClick: () => void
}

const MenuToggleWrapper = styled(BaseButton)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.1);
    box-shadow: 8px 8px 7px 0px rgba(226,226,226,1);
  }

  & > div, & > label {
    margin-left: 1rem;
  }
`

const Icon = styled.div<{ active: boolean }>`
  width: 16px; height: 16px;
  transition: all 0.3s ease-in;
  transform: ${({ active }) => active ? 'rotate(180deg)' : ''};
`

const MenuToggleName = styled.label``

const MenuToggle: React.FC<MenuToggleProps> = ({ profile, active, size, onClick }) => {
  return (
    <MenuToggleWrapper onClick={onClick}>
      <SquareImage 
        src={profile.image}
        size="small"
        alt="Profile pic"
      />
      <RenderIf condition={size === 'large' }>
        <MenuToggleName>{profile.name}</MenuToggleName>
        <Icon active={active}>{<AiFillCaretDown />}</Icon>
      </RenderIf>
    </MenuToggleWrapper>
  )
}

export default MenuToggle