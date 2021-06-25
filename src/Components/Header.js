import React from 'react'
import { AppBar, Toolbar, Avatar, Typography, IconButton } from "@material-ui/core"
import logo from '../images/myLogo.gif'
import { makeStyles } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: theme.spacing(3),
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
          <Avatar src={logo} alt="logo" />
          <div className={classes.root}>
            <Typography className={classes.title} variant="h5">William Dutton</Typography>
            <Typography className={classes.title} >Software Engineer</Typography>
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