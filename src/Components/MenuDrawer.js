import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  menuStyle: {
    marginRight: theme.spacing(3)
  }
}));

export default function MenuDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/AboutMe">
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton className={classes.menuStyle} onClick={toggleDrawer('left', true)}><MenuIcon color="secondary" fontSize="large"></MenuIcon></IconButton>
        <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}