import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { createStoryFactory } from '../utils/storybook.utils'

import { FaEnvelope } from 'react-icons/fa'

import PureIconInput, { PureIconInputProps } from './PureIconInput'

export default {
  title: 'Icon Input',
  component: PureIconInput,
  decorators: [Story => <div style={{ margin: '1.5rem'}}><Story /></div>]
} as Meta

const createIconInputStory = createStoryFactory(PureIconInput)

const DefaultInputProps: PureIconInputProps = {
  icon: FaEnvelope,
  id: 'email',
  label: 'Email',
  value: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {}
}

export const Default = createIconInputStory({
  ...DefaultInputProps
})

export const ActiveInput = createIconInputStory({
  ...DefaultInputProps,
  value: 'a'
})