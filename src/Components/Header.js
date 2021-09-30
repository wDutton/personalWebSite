import React from 'react'
import { AppBar, Toolbar, IconButton, Hidden, } from "@material-ui/core"
import wduttonLogo from '../images/wduttonLogo.gif'
import { makeStyles } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuDrawer from './MenuDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { borders } from '@material-ui/system';

import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icons: {
    color: theme.palette.secondary.main
  },
  appBar: {
    position: "static"
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    color: theme.palette.secondary.main
  }
}));

function Header() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


  return (
    <AppBar style={{borderBottom:"3px ridge #ff652f"}} className={classes.appBar}>
      <Toolbar>
        <Hidden mdUp>
          <MenuDrawer></MenuDrawer>
        </Hidden>
        <div style={{ marginTop: 4 }} className={classes.root}>
          <Hidden xsDown>
            <img src={wduttonLogo} alt="hello"></img>
          </Hidden>
        </div>
        <Hidden smDown>
          <List className={classes.listContainer}>
            <ListItem button component={Link} to="/" selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/Resume" selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
              <ListItemText primary="Resume" />
            </ListItem>
            <ListItem button component={Link} to="/Contact" selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Hidden>
        <IconButton href="https://github.com/wDutton" title="Github" >
          <GitHubIcon className={classes.icons} fontSize="large"></GitHubIcon>
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/william-dutton-285687135/" title="LinkedIn">
          <LinkedInIcon className={classes.icons} fontSize="large"></LinkedInIcon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;