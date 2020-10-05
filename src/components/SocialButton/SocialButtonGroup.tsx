import React from 'react'
import styled from 'styled-components'
import SocialButton from './SocialButton'

const SocialButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const SocialButtonGroup: React.FC = () => {
  return (
    <SocialButtonGroupWrapper>
      <SocialButton profile="google" />
      <SocialButton profile="facebook" />
      <SocialButton profile="twitter" />
      <SocialButton profile="github" />
    </SocialButtonGroupWrapper>
  )
}

export default SocialButtonGroup