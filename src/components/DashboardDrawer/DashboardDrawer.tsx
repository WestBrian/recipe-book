import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import { DrawerItems } from './types'
import { Link } from '@reach/router'
import { Save } from '@material-ui/icons'
import React, { FC } from 'react'
import ToolbarSpacer from 'components/ToolbarSpacer'

const DRAWER_WIDTH = 230

const useStyles = makeStyles(theme =>
  createStyles({
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
  })
)

const items: DrawerItems[] = [
  {
    text: 'My Saved Recipes',
    link: '/',
    icon: Save,
  },
]

const DashboardDrawer: FC = () => {
  const classes = useStyles()

  return (
    <Drawer
      variant={'permanent'}
      open
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <ToolbarSpacer />
      <List>
        {items.map(({ text, link, icon: Icon }) => (
          <ListItem key={text} to={link} component={Link} button>
            {Icon && (
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
            )}
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default DashboardDrawer
