import { Meta } from '@storybook/react'
import { createStoryFactory } from '../utils/storybook.utils'

import SocialButtonGroup from './SocialButtonGroup'

export default { 
  title: 'Social Button Group',
  component: SocialButtonGroup
} as Meta

export const DefaultSocialButtonGroup = createStoryFactory(SocialButtonGroup)({
  
})