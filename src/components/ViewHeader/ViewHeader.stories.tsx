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
  mode: 'LIGHT'
}

export const LargeLightViewHeader = createViewHeaderstory({
  ...DefaultViewHeaderProps
})

export const SmallLightViewHeader = createViewHeaderstory({
  ...DefaultViewHeaderProps
})

export const LargeDarkVieweHeader = createViewHeaderstory({
  ...DefaultViewHeaderProps
})

export const SmallDarkViewHeader = createViewHeaderstory({
  ...DefaultViewHeaderProps,
  mode: 'DARK'
})