import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { AiOutlineUser } from 'react-icons/ai'

import MenuListItem, { MenuListItemProps } from './MenuListItem'
import { COLORS } from '../../colors'

export default {
  title: 'Menu List Item',
  component: MenuListItem
} as Meta

const Template: Story<MenuListItemProps> = props => <MenuListItem {...props} />

const createStory = (props: MenuListItemProps): typeof Template => {
  const story = Template.bind({})
  story.args = { ...props }
  return story
}

const DefaultArgs: MenuListItemProps = {
  id: 'list-item',
  icon: AiOutlineUser,
  text: 'List Item',
  onClick: (id) => alert('Clicked Menu List Item: ' + id)
}

export const DefaultListItem = createStory({
  ...DefaultArgs
})

export const ActiveListItem = createStory({
  ...DefaultArgs,
  active: true
})

export const AccentListItem = createStory({
  ...DefaultArgs,
  color: COLORS.RED1
})

export const ActiveAccentListItem = createStory({
  ...DefaultArgs,
  color: COLORS.RED1,
  active: true
})