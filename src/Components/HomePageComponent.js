import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, CardMedia, CardHeader, CardContent, Hidden } from '@material-ui/core'
import wduttonLogo from '../images/wduttonLogo.gif'
import robbiePic from '../images/golfSwing.png'

const useStyles = makeStyles((theme) => ({
  subColor: {
    color: '#ffffff'
  },
  root: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    backgroundColor: theme.palette.primary.light,
  },
  gridContainer: {
    justifyContent: "center",
    color: theme.palette.primary.contrastText,
  }

}));

function HomePageComponent() {
  const classes = useStyles();

  return (
    <div style={{ paddingLeft: 20, paddingRight: 20 }} className={classes.root}>
      <div style={{display:"flex", justifyContent:"center" }}>
        <Hidden smUp>
          <img src={wduttonLogo} alt="hello"></img>
        </Hidden>
      </div>
      <Grid container className={classes.gridContainer} spacing={1} >
        <Grid item xs={12} sm={9}>
          <CardContent className={classes.subColor}>
            <CardHeader subheader={<Typography className={classes.subColor}>Software Engineer</Typography>} title="William (Robbie) Dutton" />
            <Typography variant="body1" component="p">
              Hello Everyone and thanks for visiting my personal Website! My Name is William Dutton, but you can just call me Robbie! <br /><br />
              I grew up in Andover Massachusetts with 3 younger brothers, Derek, Brendan and Mikey. We were all very active kids participating in sports, community service and many other extra curriculars.
              I attended Andover High School where I played on the golf, ski and baseball Teams. I still golf and ski as much as I can in my free time.
              After High School, I graduated from Stonehill College with a Bachelor of Science in Computer Science.<br /><br />
              Getting a job at Travelers Insurance working within the Claim Technology department was very exciting for me. During my work here, I have learned many technologies such as AWS, .NET, React and much more.
              Everyday has been a joy being able to do take part in something I love - Technology!
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={9} sm={3}>
          <Paper className={classes.paper} elevation={10}>
            <CardMedia className={classes.cover}
              component="img"
              alt="Robbie Golf Swing"
              height="600"
              image={robbiePic}
              title="Robbie Golf Swing"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>

  );
}
export default HomePageComponent;