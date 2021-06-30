import lakePic from '../images/lake.jpg'
import { CardContent, Card, CardHeader, Typography, CardMedia} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1)
  }
}));


function generateAge(){
    var date = new Date()
    console.log(date.toString())
}

function AboutMeCard() {
  const classes = useStyles()
  generateAge();
  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          subheader="Software Engineer" title="William Dutton" />
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="350"
          image={lakePic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" component="p">
                Hello Everyone and thanks for visiting my personal Website! 
          </Typography>
        </CardContent>

      </Card>
    </div>
  );
}

export default AboutMeCard;
