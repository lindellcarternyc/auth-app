import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { createStoryFactory } from '../utils/storybook.utils'

import ProfilePic from '../../images/profile.jpg'

import Menu, { MenuProps } from './Menu'

const Wrapper = (props: Pick<MenuProps, 'profile' | 'size' | 'mode'>): JSX.Element => {
  const [activeId, setAciveId] = React.useState('profile')
  return (
    <Menu {...props} activeId={activeId} onClick={setAciveId} />
  )
}

export default {
  title: 'Menu',
  component: Menu,
} as Meta

const createWrapped = createStoryFactory((props: Pick<MenuProps, 'size' | 'profile' | 'mode'>) => {
  return <Wrapper { ...props}/>
})

const createMenuStory = createWrapped // createStoryFactory(Menu)

const Profile = {
  image: ProfilePic,
  name: 'Lindell Carter'
}

const DEFAULT_PROPS: Pick<MenuProps, 'profile' | 'size' | 'mode'> = {
  size: 'small',
  profile: Profile,
  mode: 'LIGHT'
}

export const SmallMenu = createMenuStory({
  ...DEFAULT_PROPS
})

export const LargeMenu = createMenuStory({
  ...DEFAULT_PROPS,
  size: 'large'
})