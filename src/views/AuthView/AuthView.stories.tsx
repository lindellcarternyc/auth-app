import React from 'react'
import { Meta } from '@storybook/react'
import { createStoryFactory } from '../../components/utils/storybook.utils'

import AuthView, { AuthViewProps } from './AuthView'


export default {
  title: 'Auth View',
  component: AuthView,
  decorators: [Story => <div style={{
      padding: '1.5rem'
    }}>
      <Story />
    </div>
  ]
} as Meta

const createAuthViewStory = createStoryFactory(AuthView)

const DefaultAuthViewProps: AuthViewProps = {
  type: 'LOGIN',
  onSubmit: data => console.log(data),
  isLoading: false,
  alternateAuth: {
    type: 'LOGIN',
    onClick: () => {}
  }
}

export const LoginView = createAuthViewStory({
  ...DefaultAuthViewProps
})

export const SubtitleView = createAuthViewStory({
  ...DefaultAuthViewProps,
  type: 'REGISTER',
  alternateAuth: {
    type: 'REGISTER',
    onClick: () => {}
  }
})