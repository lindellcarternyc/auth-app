import { Meta } from '@storybook/react'
import { createStoryFactory } from '../utils/storybook.utils'

import AlternateAuth from './AlternateAuth'

export default { 
  title: 'Alternate Auth',
  component: AlternateAuth
} as Meta

const createAlternateAuthStory = createStoryFactory(AlternateAuth)

export const LoginAlternate = createAlternateAuthStory({
  type: 'LOGIN',
  onClick: () => { console.log('register') }
})

export const RegisterAlternate = createAlternateAuthStory({
  type: 'REGISTER',
  onClick: () => {}
})