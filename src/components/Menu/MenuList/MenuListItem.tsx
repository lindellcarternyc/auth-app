import React from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'
import { COLORS } from '../../colors'

export interface MenuListItemProps {
  id: string
  text: string
  icon: IconType
  active?: boolean
  color?: string
  onClick?: (id: string) => void
}

const ListItem = styled.div<{ active?: boolean, color?: string }>`
  list-style: none;
  width: 100%;
  max-width: 160px;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  background: ${({ active }) => active ? COLORS.GRAY2 : 'transparent'};
  transition: all 0.3s ease-in;
  color: ${({ color }) => color ? color : COLORS.GRAY3};
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: ${COLORS.GRAY2}
  }
`

const ListItemLabel = styled.label`
  margin-left: 0.5rem;
  line-height: 1.5rem;
`

const MenuListItem: React.FC<MenuListItemProps> = ({ text, icon, id, ...rest }) => {
  const { onClick, ...other } = rest

  const handleClick = (evt: React.SyntheticEvent<HTMLElement>) => {
    evt.preventDefault()
    evt.stopPropagation()
    if (onClick) onClick(id)
  }

  return (
    <ListItem {...other} onClick={handleClick}>
      {icon({})}
      <ListItemLabel>{text}</ListItemLabel>
    </ListItem>
  )
}

export default MenuListItem