import { Meta } from '@storybook/react'
import { createStoryFactory } from '../utils/storybook.utils'

import LoaderButton from './LoaderButton'

export default {
  title: 'Loader Button',
  component: LoaderButton
} as Meta

const createLoaderButtonStory = createStoryFactory(LoaderButton)

export const PrimaryLoaderButton = createLoaderButtonStory({
  label: 'Sign Up',
  isLoading: true,
  primary: true,
  onClick: () => console.log('click loader button story')
})