import React from 'react'
import { Story } from '@storybook/react/types-6-0'

type StoryComponent<T> = React.ComponentType<T>

export function createStoryFactory<T>(Component: StoryComponent<T>) {
  const Template: Story<T> = props => <Component {...props} />

  return (props: T): Story<T> => {
    const story = Template.bind({})
    story.args = { ...props }
    return story
  }
}