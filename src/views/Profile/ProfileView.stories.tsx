import { Meta } from '@storybook/react'
import { createStoryFactory } from '../../components/utils/storybook.utils'

import ProfileView, { ProfileViewProps } from './ProfileView'
import ProfilePic from '../../images/profile.jpg'

export default {
  title: 'Profile View',
  component: ProfileView
} as Meta

const createProfileViewStory = createStoryFactory(ProfileView)

const DefaultProfileViewProps: ProfileViewProps = {
  header: {
    title: 'Profile',
    subtitle: 'Some info may be visible to others',
    onClickEdit: () => console.log('edit')
  },
  size: 'small',
  mode: 'LIGHT',
  profile: {
    name: 'Lindell Carter',
    email: 'lindellcarternyc@gmail.com',
    phone: '555-555-5555',
    bio: `I'm a singer who likes to code!`,
    image: ProfilePic,
    password: 'password123'
  }
}

export const SmallLightView = createProfileViewStory({
  ...DefaultProfileViewProps
})

export const LargeLightView = createProfileViewStory({
  ...DefaultProfileViewProps,
  size: 'large'
})

export const DarkSmallProfileView = createProfileViewStory({
  ...DefaultProfileViewProps,
  mode: 'DARK'
})

export const DarkLargeProfile = createProfileViewStory({
  ...DarkSmallProfileView.args as ProfileViewProps,
  size: 'large'
})