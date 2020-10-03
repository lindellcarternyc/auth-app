import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import MenuToggle, { MenuToggleProps } from './MenuToggle'

import ProfileImage from '../../../images/profile.jpg'

export default { 
  title: 'Menu Toggle',
  component: MenuToggle
} as Meta

const Template: Story<MenuToggleProps> = props => <MenuToggle {...props} />

const createStory = (props: MenuToggleProps): Story<MenuToggleProps> => {
  const story = Template.bind({})
  story.args = { ...props }
  return story
}

const DefaultProps: MenuToggleProps = {
  profile: {
    name: 'Lindell Carter',
    image: ProfileImage
  },
  active: false,
  size: 'small',
  onClick: () => alert('Menu Toggle')
}

export const DefaultMenuToggle = createStory({
  ...DefaultProps
})

export const ActiveMenuToggle = createStory({
  ...DefaultProps,
  active: true
})

export const LargeToggle = createStory({
  ...DefaultProps,
  size: 'large'
})

export const LargeActiveToggle = createStory({
  ...DefaultProps,
  active: true,
  size: 'large'
})