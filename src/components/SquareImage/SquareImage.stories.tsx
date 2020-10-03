import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import SquareImage, { SquareImageProps } from './SquareImage'

import ProfilePic from '../../images/profile.jpg'

export default {
  component: SquareImage,
  title: 'SquareImage',
} as Meta

const Template: Story<SquareImageProps> = args => <SquareImage {...args} />

const SquareImageArgs: SquareImageProps = {
  src: ProfilePic,
  size: 'small',
  alt: 'Profile img'
}

export const SmallSquareImage = Template.bind({})
SmallSquareImage.args = SquareImageArgs

export const LargeSquareImage = Template.bind({})
LargeSquareImage.args = {
  ...SquareImageArgs,
  size: 'large'
}