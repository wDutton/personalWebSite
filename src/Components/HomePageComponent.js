import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, Typography, CardMedia, CardHeader, CardContent } from '@material-ui/core'
import lakePic from '../images/lake.jpg'
import robbiePic from '../images/golfSwing.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  cover: {
    width: 200,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },

}));

function HomePageComponent() {
  const classes = useStyles();

  return (
    <div >

      <CardMedia
        component="img"
        alt="Lake Winnipesaukee"
        height="350"
        image={lakePic}
        title="Lake Winnipesaukee"
      />
      <Container >
        <Card className={classes.root}>
        <div className={classes.details}>
          <CardHeader
            subheader="Software Engineer" title="William Dutton" />
            <CardContent>
              <Typography variant="body1" component="p">
                Hello Everyone and thanks for visiting my personal Website! My Name is William Dutton, but you can just call me Robbie! <br /><br />
                I grew up in Andover Massachusetts with 3 younger brothers, Derek, Brendan and Mikey. We were all very active kids growing up with sports, community service and many other activities.
                I attended Andover High School where I played on the golf, ski and baseball Teams. I still golf and ski as much as I can in my free time.
                After High School, I graduated from Stonehill College with a Bachelor of Science in Computer Science.<br /><br />
                Getting a job at Travelers Insurance working within the Claim Technology department was very exciting for me. During my work here, I have learned many technologies such as AWS, .NET, React and much more.
                Everyday has been a joy being able to do take part in something I love - Technology!
              </Typography>
            </CardContent>
          </div>
          <CardMedia className={classes.cover}
            component="img"
            alt="Contemplative Reptile"
            height="400"
            image={robbiePic}
            title="Contemplative Reptile"
          />
        </Card>
      </Container>

    </div>
  );
}
export default HomePageComponent;