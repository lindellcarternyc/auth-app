import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../components/Button/Button.component'
import ViewHeader, { ViewHeaderProps } from '../../components/ViewHeader/ViewHeader'

export interface ProfileViewHeaderProps extends Pick<ViewHeaderProps, 'title' | 'subtitle' | 'mode'> {
  onClickEdit(): void
}

const StyledProfileViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`

const ProfileViewHeader: React.FC<ProfileViewHeaderProps> = ({ title, subtitle, mode, onClickEdit }) => {
  return (
    <StyledProfileViewHeader>
      <ViewHeader title={title} subtitle={subtitle} mode={mode} />
      <StyledButton onClick={onClickEdit}>Edit</StyledButton>
    </StyledProfileViewHeader>
  )
}

export default ProfileViewHeader