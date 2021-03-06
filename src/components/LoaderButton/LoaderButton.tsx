import React from 'react'
import { StyledButton, ButtonProps } from '../Button/Button.component'
import { COLORS } from '../colors'

import Loader from '../Loader/Loader'

export interface LoaderButtonProps extends ButtonProps {
  isLoading: boolean
}

const LoaderButton: React.FC<LoaderButtonProps> = ({ isLoading, label, primary, fullWidth, disabled, onClick }) => {
  const render = isLoading ? <Loader 
    trackColor={primary ? undefined : COLORS.GRAY2}
    loadColor={primary ? undefined : COLORS.GRAY3}
  /> : label
  return (
    <StyledButton
      primary={primary}
      fullWidth={fullWidth}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {render}
    </StyledButton>
  )
}

export default LoaderButton