import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import SocialButton, { SocialButtonProps } from './SocialButton'

export default {
  title: 'SocialButton',
  component: SocialButton
} as Meta

const Template: Story<SocialButtonProps> = args => <SocialButton {...args} />

export const Twitter = Template.bind({})
Twitter.args = {
  profile: 'twitter'
}

export const Facebook = Template.bind({})
Facebook.args = {
  profile: 'facebook'
}

export const Google = Template.bind({})
Google.args = {
  profile: 'google',
  onClick: () => alert('google')
}

export const Github = Template.bind({})
Github.args = {
  profile: 'github'
}