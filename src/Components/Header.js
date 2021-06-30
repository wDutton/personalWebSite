import React from 'react'
import { AppBar, Toolbar, IconButton, } from "@material-ui/core"
import wduttonLogo from '../images/wduttonLogo.gif'
import { makeStyles } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icons: {
    margin: theme.spacing(1),
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <MenuDrawer></MenuDrawer>
          <div style={{marginTop: 4 }} className={classes.root}>
            <img src={wduttonLogo} alt="hello"></img>
          </div>
          <IconButton href="https://github.com/wDutton" title="Github" className={classes.links}>
            <GitHubIcon color="secondary" fontSize="large"></GitHubIcon>
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/william-dutton-285687135/" title="LinkedIn" className={classes.links}>
            <LinkedInIcon color="secondary" fontSize="large"></LinkedInIcon>
          </IconButton>          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;