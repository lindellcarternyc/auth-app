import React from 'react'
import styled from 'styled-components'
import { FaSignOutAlt, FaUser, FaUsers } from 'react-icons/fa'

import { COLORS } from '../colors'

import MenuList from './MenuList/MenuList'
import MenuToggle from './MenuToggle/MenuToggle'
import RenderIf from '../RenderIf/RenderIf'
import { Profile } from '../../interfaces/profile.interface'
import { Theme } from '../../interfaces/Theme.interface'

export interface MenuProps {
  mode: Theme['mode']
  size: 'small' | 'large'
  profile: Pick<Profile, 'name' | 'image'>
  activeId: string | null
  onClick: (id: string) => void
}

const MenuWrapper = styled.div<{ mode: Theme['mode'] }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${({ mode }) => {
    if (mode === 'LIGHT') return 'white'
    return COLORS.BLACK1
  }};
`

const Menu: React.FC<MenuProps> = ({ size, profile, activeId, onClick, mode }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleIsOpen = () => { 
    setIsOpen(current => !current)
  }

  const handleClick = (id: string) => {
    setIsOpen(false)
    onClick(id)
  }

  return (
    <MenuWrapper mode={mode}>
      <MenuToggle 
        size={size} 
        profile={profile} 
        active={isOpen} 
        onClick={toggleIsOpen} 
      />
      <RenderIf condition={isOpen} >
        <MenuList
          style={{ marginTop: '1rem' }}
          groups={[
            {
              onClick: handleClick,
              items: [
                { text: 'Profile', id: 'profile', icon: FaUser },
                { text: 'Group Chate', id: 'group-chat', icon: FaUsers }
              ], activeId
            }, {
              onClick: handleClick,
              items: [
                {
                  text: 'Sign Out', id: 'sign-out', icon: FaSignOutAlt,
                  color: COLORS.RED1
                }
              ],
              activeId
            }
          ]} />
      </RenderIf>
    </MenuWrapper>
  )
}

export default Menu