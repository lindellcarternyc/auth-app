import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../colors'

import MenuListGroup, { MenuListGroupProps } from './MenuListGroup'

export interface MenuListProps {
  groups: [MenuListGroupProps, ...MenuListGroupProps[]]
  style?: React.CSSProperties
}

const MenuListWrapper = styled.div`
  border: 1px solid ${COLORS.GRAY4};
  width: 100%;
  max-width: 176px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`

const MenuList: React.FC<MenuListProps> = ({ groups, ...rest }) => {
  return (
    <MenuListWrapper {...rest} >
      {groups.map((groupProps, idx) => {
        return <MenuListGroup {...groupProps} key={idx} />
      })}
    </MenuListWrapper>
  )
}

export default MenuList