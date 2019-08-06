import { ComponentType } from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'

export interface DrawerItems {
  text: string
  link: string
  icon?: ComponentType<SvgIconProps>
}
