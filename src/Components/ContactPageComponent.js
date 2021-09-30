import { CardContent, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  pageName: {
    margin: 40,
    color: theme.palette.primary.contrastText,
  }
}));

function ContactPageComponent() {
  const classes = useStyles();
  return (
    <div className={classes.pageName}>    
    <Grid className={classes.root} container>
      <Grid item className={classes.card} xl>
        <CardContent>
          
          <Typography variant="h5">
            <br />
            Feel free to contact me with any questions or comments!  You can reach me by text, call or an email! <br /> <br /> <br />
          </Typography>
          <Typography variant="h6">
            <b>Cell: </b><a href="tel:+9788862538" style={{color:"whitesmoke"}}>978-886-2538</a> <br />
            <b>Email: </b><a href="mailto:wdutton04@gmail.com?Subject=I%20Saw%20Your%20Site!" style={{color:"whitesmoke"}}target="_blank">wdutton04@gmail.com</a> <br /><br />
          </Typography>
        </CardContent>
      </Grid>
      <Grid item className={classes.card} xs>

      </Grid>
    </Grid>
    </div>

  );
}

export default ContactPageComponent;
