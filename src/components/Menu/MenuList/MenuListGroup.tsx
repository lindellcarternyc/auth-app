import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../colors'

import MenuListItem, { MenuListItemProps } from './MenuListItem'

type GroupItemProps = Omit<MenuListItemProps, 'onClick'>

export interface MenuListGroupProps {
  onClick?: (id: string) => void
  items: [GroupItemProps, ...GroupItemProps[]]
  activeId: string | null
}

const MenuListGroupWrapper = styled.div`
  border: 1px solid transparent;
  border-bottom-color: ${COLORS.GRAY4};
  width: 100%;
  max-width: 176px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  &:last-child {
    border-bottom-color: transparent;
  }
  /* border: 1px solid red; */
  /* padding-right: 16px; */
  
`

const MenuListGroup: React.FC<MenuListGroupProps> = ({ items, onClick, activeId }) => {
  return (
    <MenuListGroupWrapper>
      {/* <div> */}
      {items.map(itemProps => {
        return <MenuListItem {...itemProps} onClick={onClick} active={activeId === itemProps.id} key={itemProps.id} />
      })}
      {/* </div> */}
    </MenuListGroupWrapper>
  )
}

export default MenuListGroup