import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StonehillCard from '../Components/StonehillCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2)
  },
}));

function HomePageGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs>
          <StonehillCard/>
        </Grid>
        <Grid container item xs>
            <StonehillCard/>
        </Grid>
        <Grid container item xs>
            <StonehillCard/>
        </Grid>
      </Grid>
    </div>
  );
}
export default HomePageGrid;