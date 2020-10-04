import { Meta } from '@storybook/react/types-6-0'
import { createStoryFactory } from '../../utils/storybook.utils'

import MenuListGroup,{ MenuListGroupProps } from './MenuListGroup'
import { FaUserCircle, FaUsers } from 'react-icons/fa'

export default {
  title: 'Menu List Group',
  component: MenuListGroup
} as Meta

const createMenuListGroupStory = createStoryFactory(MenuListGroup)

const DefaultMenuListGroupProps: MenuListGroupProps = {
  items: [
    { id: 'item 1', text: 'Profile', icon: FaUserCircle },
    { id: 'item 2', text: 'Group Chat', icon: FaUsers }
  ],
  onClick: id => alert(`Clicked ${id} in group!`),
  activeId: null
}

export const DefaultMenuListGroup = createMenuListGroupStory({
  ...DefaultMenuListGroupProps
})

export const FirstItemActive = createMenuListGroupStory({
  ...DefaultMenuListGroupProps,
  activeId: 'item 1'
})

