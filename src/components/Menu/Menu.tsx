import React from 'react'
import styled from 'styled-components'
import { FaSignOutAlt, FaUser, FaUsers } from 'react-icons/fa'

import { COLORS } from '../colors'

import MenuList from './MenuList/MenuList'
import MenuToggle from './MenuToggle/MenuToggle'
import RenderIf from '../RenderIf/RenderIf'
import { Profile } from '../../interfaces/profile.interface'

export interface MenuProps {
  size: 'small' | 'large'
  profile: Profile
  activeId: string | null
  onClick: (id: string) => void
}

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Menu: React.FC<MenuProps> = ({ size, profile, activeId, onClick }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleIsOpen = () => { 
    setIsOpen(current => !current)
  }

  const handleClick = (id: string) => {
    setIsOpen(false)
    onClick(id)
  }

  return (
    <MenuWrapper>
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