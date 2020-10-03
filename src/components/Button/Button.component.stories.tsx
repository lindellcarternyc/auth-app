import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './Button.component'

export default {
  title: 'Button',
  component: Button, 
  decorators: [(Story) => (
    <div style={{}}><Story /></div>
  )]
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Primary Button'
}

export const PrimaryFullWidth = Template.bind({})
PrimaryFullWidth.args = {
  ...Primary.args,
  label: 'Primary Button Fullwidth',
  fullWidth: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary'
}
