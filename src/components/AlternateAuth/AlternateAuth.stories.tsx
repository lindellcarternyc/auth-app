import { Meta } from '@storybook/react'
import { createStoryFactory } from '../utils/storybook.utils'

import AlternateAuth from './AlternateAuth'

export default { 
  title: 'Alternate Auth',
  component: AlternateAuth
} as Meta

const createAlternateAuthStory = createStoryFactory(AlternateAuth)

export const LoginAlternate = createAlternateAuthStory({
  text: `Don't have an account yet?`,
  link: {
    text: 'Register',
    to: ''
  },
  onClick: () => { console.log('register') }
})

export const RegisterAlternate = createAlternateAuthStory({
  text: 'Already a member?',
  link: {
    text: 'Login',
    to: '#'
  },
  onClick: () => {}
})