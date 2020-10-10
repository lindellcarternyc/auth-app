import React from 'react'

import { Profile } from '../../interfaces/profile.interface'

import Menu from '../Menu'
import Logo from '../Logo'
import styled from 'styled-components'
import { Theme } from '../../interfaces/Theme.interface'
import { COLORS } from '../colors'

export interface NavbarProps {
  mode: 'LIGHT' | 'DARK'
  size: 'small' | 'large'
  profile: Pick<Profile, 'image' | 'name'>
  activeLink: string
  onClickLink(link: string): void
  onClickSignOut(): void
}

const NavbarWrapper = styled.div<{ mode: Theme['mode']}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  background: ${({ mode }) => {
    if (mode === 'DARK') return COLORS.BLACK1;
  }};
  padding-left: 0.5rem;

  & > div {
    position: absolute;
    top: 8px;
    right: 16px;
  }
`

const Navbar: React.FC<NavbarProps> = ({ mode, size, profile, activeLink, onClickLink, onClickSignOut }) => {
  const onClickMenu = (id: string) => {
    if (id === 'sign-out') return onClickSignOut()
    return onClickLink(id)
  }

  return (
    <NavbarWrapper mode={mode}>
      <Logo theme={mode} />
      <Menu 
        mode={mode}
        profile={profile}
        size={size}
        onClick={onClickMenu}
        activeId={activeLink}
      />
    </NavbarWrapper>
  )
}

export default Navbar