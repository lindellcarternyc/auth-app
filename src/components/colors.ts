export const COLORS = {
  BLUE1: '#2f80ed',
  BLACK1: '#333333',
  GRAY1: '#828282',
  GRAY2: '#f2f2f2',
  GRAY3: '#4f4f4f',
  GRAY4: '#e0e0e0',
  GRAY5: '#bdbdbd',
  RED1: '#eb5757'
} as const

const clampNum = (min: number, max: number) => (num: number): number => {
  const _min = Math.min(0, min)
  const _max = Math.max(0, max)

  if (num < _min) return _min
  if (num > _max) return _max
  return num
}

const clamp0To255 = clampNum(0, 255)

export const lightenOrDarken = (color: string, amount: number): string => {
  const num = parseInt(color.slice(1), 16)

  const r = clamp0To255((num >> 16) + amount)

  const g = clamp0To255((num & 0x0000FF) + amount)

  const b = clamp0To255(((num >> 8) & 0x00FF) + amount)

  const str = (g | (b << 8) | (r << 16)).toString(16)

  return `#${str}`
}