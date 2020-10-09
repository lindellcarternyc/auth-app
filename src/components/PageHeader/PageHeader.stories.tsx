import { Meta } from '@storybook/react'
import { createStoryFactory } from '../utils/storybook.utils'

import PageHeader, { PageHeaderProps } from './PageHeader'

export default {
  title: 'Page Header',
  component: PageHeader
} as Meta

const createPageHeaderStory = createStoryFactory(PageHeader)

const DefaultPageHeaderProps: PageHeaderProps = {
  title: 'Profile',
  subtitle: 'Basic info, like your name and photo',
  size: 'small',
  mode: 'LIGHT'
}

export const SmallHeader = createPageHeaderStory(DefaultPageHeaderProps)

export const LargeHeader = createPageHeaderStory({
  ...DefaultPageHeaderProps,
  size: 'large'
})