import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../components/colors'

const AuthorInfoWrapper = styled.div`
  color: ${COLORS.GRAY5};
  display: flex;
  justify-content: space-between;
  cursor: inherit;
  a {
    color: inherit;
  }
`

const AuthorInfo = () => {
  return (
    <AuthorInfoWrapper>
      <span>Lindell Carter</span>
      <a href="/">lindellcarter.io</a>
    </AuthorInfoWrapper>
  )
}

export default AuthorInfo