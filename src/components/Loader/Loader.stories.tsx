import React from 'react'
import { Meta } from '@storybook/react'

import Loader from './Loader'
import { createStoryFactory } from '../utils/storybook.utils'

export default {
  title: 'Loader',
  component: Loader,
  decorators: [Story => <div style={{ margin: '1.5rem', backgroundColor: 'darkgray' }}><Story /></div>]
} as Meta

const createLoaderStory = createStoryFactory(Loader)

export const SpinnerLoader = createLoaderStory({})

export const BarsLoader = createLoaderStory({
  type: 'bars'
})