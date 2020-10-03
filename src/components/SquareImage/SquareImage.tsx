import styled from 'styled-components'

export interface SquareImageProps {
  src: string
  alt: string
  size: 'small' | 'large'
}

const getSizePixels = (size: 'small' | 'large'): number => {
  if (size === 'large') return 72
  return 36
}

const SquareImage = styled.img<Pick<SquareImageProps, 'size'>>`
  width: ${({ size }) => `${getSizePixels(size)}px`};
  border-radius: 4px;
`

export default SquareImage