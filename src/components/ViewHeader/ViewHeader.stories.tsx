import { Meta } from '@storybook/react'
import { createStoryFactory } from '../utils/storybook.utils'
import ViewHeader, { ViewHeaderProps } from './ViewHeader'

export default {
   title: 'View Header',
   component: ViewHeader
} as Meta

const createViewHeaderstory = createStoryFactory(ViewHeader)

const DefaultViewHeaderProps: ViewHeaderProps = {
  title: 'Profile',
  subtitle: 'Some info may be visible to other people',
  size: 'large',
  mode: 'LIGHT'
}

export const LargeLightViewHeader = createViewHeaderstory({
  ...DefaultViewHeaderProps
})

export const SmallLightViewHeader = createViewHeaderstory({
  ...DefaultViewHeaderProps,
  size: 'small'
})

export const LargeDarkVieweHeader = createViewHeaderstory({
  ...DefaultViewHeaderProps,
  mode: 'DARK'
})

export const SmallDarkViewHeader = createViewHeaderstory({
  ...DefaultViewHeaderProps,
  mode: 'DARK',
  size: 'small'
})