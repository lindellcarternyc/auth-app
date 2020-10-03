import styled from 'styled-components'

export interface SquareImageProps {
  src: string
  alt: string
  size: 'small' | 'large'
}

const getSizePixels = (size: 'small' | 'large'): string => {
  if (size === 'large') return '72px'
  return '36px'
}

const SquareImage = styled.img<Pick<SquareImageProps, 'size'>>`
  width: ${({ size }) => getSizePixels(size)};
  border-radius: 4px;
`

export default SquareImage