import { Meta } from '@storybook/react'
import { createStoryFactory } from '../utils/storybook.utils'
import NavbarComponent, { NavbarProps } from './Navbar'

import ProfilePic from '../../images/profile.jpg'

export default {
  title: 'Navbar',
  component: NavbarComponent
} as Meta

const createNavbarStory = createStoryFactory(NavbarComponent)

const DefaultNavbarProps: NavbarProps = {
  theme: 'LIGHT',
  size: 'small',
  profile: {
    image: ProfilePic,
    name: 'Lindell Carter'
  },
  onClickSignOut: () => {},
  onClickLink: () => {},
  activeLink: 'profile'
}

export const SmallNavbar = createNavbarStory({
  ...DefaultNavbarProps
})

export const LargeNavbar = createNavbarStory({ 
  ...DefaultNavbarProps,
  size: 'large'
})