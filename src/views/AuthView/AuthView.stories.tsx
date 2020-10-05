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
  title: 'This is a title',
  action: {
    text: 'Action text',
    handler: async () => {}
  },
  isLoading: false,
  alternateAuth: {
    text: 'Alternate Auth',
    link: {
      text: 'Link',
      to: ''
    },
    onClick: () => {}
  }
}

export const DefaultView = createAuthViewStory({
  ...DefaultAuthViewProps
})

export const SubtitleView = createAuthViewStory({
  ...DefaultAuthViewProps,
  subtitle: 'This is a subtitle'
})