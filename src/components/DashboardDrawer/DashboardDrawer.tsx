import {
  Drawer,
  Hidden,
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
import { useMenuState } from 'providers/MenuProvider'
import React, { FC, createContext } from 'react'
import ToolbarSpacer from 'components/ToolbarSpacer'

const DRAWER_WIDTH = 230

export const DrawerContext = createContext<boolean>(false)

const useStyles = makeStyles(() =>
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

const Menu: FC = () => {
  return (
    <>
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
    </>
  )
}

const DashboardDrawer: FC = () => {
  const classes = useStyles()
  const { open, setOpen } = useMenuState()

  return (
    <nav>
      <Hidden mdUp>
        <Drawer
          variant={'temporary'}
          open={open}
          onClose={() => setOpen(false)}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Menu />
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          variant={'permanent'}
          open
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Menu />
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default DashboardDrawer
