import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import Resume from '../images/Resume2021.pdf'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: theme.spacing(2),
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.light,
    elevation: 6
  },
}));


function ResumePageComponent() {
  const classes = useStyles();
  return (
    <div >
      <Container >
        <Card className={classes.root} >
          <CardContent>
            <CardMedia
              component="iframe"
              alt="Resume"
              height="1200"
              image={Resume}
              title="Resume"
            />
          </CardContent>
        </Card>
      </Container>
    </div>

  );
}
export default ResumePageComponent;