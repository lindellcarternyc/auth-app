import React from 'react'

import { Profile } from '../../interfaces/profile.interface'

import Menu from '../Menu'
import Logo from '../Logo'
import styled from 'styled-components'

export interface NavbarProps {
  theme: 'LIGHT' | 'DARK'
  size: 'small' | 'large'
  profile: Profile
  activeLink: string
  onClickLink(link: string): void
  onClickSignOut(): void
}

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  display: flex;
  align-items: center;


  & > div {
    position: absolute;
    top: 0;
    right: 0;
  }
`

const Navbar: React.FC<NavbarProps> = ({ theme, size, profile, activeLink, onClickLink, onClickSignOut }) => {
  const onClickMenu = (id: string) => {
    if (id === 'sign-out') return onClickSignOut()
    return onClickLink(id)
  }

  return (
    <NavbarWrapper>
      <Logo theme={theme} />
      <Menu 
        profile={profile}
        size={size}
        onClick={onClickMenu}
        activeId={activeLink}
      />
    </NavbarWrapper>
  )
}

export default Navbar