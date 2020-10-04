import { Meta } from '@storybook/react/types-6-0'
import { createStoryFactory } from '../../utils/storybook.utils'

import MenuList, { MenuListProps } from './MenuList'
import { MenuListGroupProps } from './MenuListGroup'
import { DefaultMenuListGroup } from './MenuListGroup.stories'
import { MenuListItemProps } from './MenuListItem'
import { AccentListItem } from './MenuListItem.stories'
import { FaSignOutAlt} from 'react-icons/fa'

export default {
  title: 'Menu List',
  component: MenuList
} as Meta

const createMenuListStory = createStoryFactory(MenuList)

const DefaultMenuListProps: MenuListProps = {
  groups: [
    DefaultMenuListGroup.args as MenuListGroupProps,
    { 
      items: [
        {...AccentListItem.args as MenuListItemProps, icon: FaSignOutAlt },
      ],
      activeId: null
    }
  ]
}

export const DefaultMenuList = createMenuListStory({
  ...DefaultMenuListProps
})