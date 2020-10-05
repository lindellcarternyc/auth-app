import React from 'react'
import { Meta } from '@storybook/react'

import AuthForm, { AuthFormProps } from './AuthForm'
import { createStoryFactory } from '../../components/utils/storybook.utils'

export default { 
  title: 'Auth Form',
  component: AuthForm,
  decorators: [Story => <div style={{ padding: '1rem'}}><Story /></div>]
} as Meta

const createAuthFormStory = createStoryFactory(AuthForm)

const DefaultAuthFormProps: AuthFormProps = {
  data: {
    email: '',
    password: ''
  },
  action: {
    text: 'Sign Up'
  },
  state: {
    isLoading: false,
    isValid: false
  },
  onChange: () => {}
}

export const DefaultAuthForm = createAuthFormStory({
  ...DefaultAuthFormProps
})

export const LoadingAuthForm = createAuthFormStory({
  ...DefaultAuthFormProps,
  state: {
    isValid: true,
    isLoading: true
  }
})