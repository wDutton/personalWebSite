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
import ComputerIcon from '@material-ui/icons/Computer';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ContactsIcon from '@material-ui/icons/Contacts';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  menuStyle: {
    marginRight: theme.spacing(3)
  },
  icons : {
    color: theme.palette.secondary.main
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
        <ListItem button component={Link} to="/Resume">
          <ListItemIcon><MenuBookIcon /></ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem button component={Link} to="/TechKnowledge">
          <ListItemIcon><ComputerIcon /></ListItemIcon>
          <ListItemText primary="Tech Knowledge" />
        </ListItem>
        <ListItem button component={Link} to="/Contact">
          <ListItemIcon><ContactsIcon /></ListItemIcon>
          <ListItemText primary="Contact Info" />
        </ListItem>

      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton className={classes.menuStyle} onClick={toggleDrawer('left', true)}><MenuIcon className={classes.icons} fontSize="large"></MenuIcon></IconButton>
        <Drawer  anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}