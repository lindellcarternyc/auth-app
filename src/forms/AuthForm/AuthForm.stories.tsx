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
  type: 'LOGIN',
  data: {
    email: '',
    password: ''
  },
  state: {
    isLoading: false,
    isValid: false
  },
  onChange: (id, value) => {
    console.log(`change:[id=${id}]:[value=${value}]`)
  },
  onSubmit: () => alert('submit')
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