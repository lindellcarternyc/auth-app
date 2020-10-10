import { Meta } from '@storybook/react'
import { createStoryFactory } from '../../components/utils/storybook.utils'
import ProfileInfo, { ProfileInfoProps } from './ProfileInfo'

import ProfilPic from '../../images/profile.jpg'

export default {
  title: 'Profile Info',
  component: ProfileInfo
} as Meta

const createProfileInfoStory = createStoryFactory(ProfileInfo)

const DefaultProfileInfoProps: ProfileInfoProps = {
  label: 'label',
  detail: { image: ProfilPic }
}

export const DefaultProfileInfo = createProfileInfoStory(DefaultProfileInfoProps)