import stonehillIcon from '../images/stonehill-logo.png'
import { CardContent, Card, CardHeader, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    maxWidth: 500,
  }
}));

function StonehillCard() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          subheader="B.S. Computer Science" title="Stonehill College" avatar={<Avatar src={stonehillIcon} alt="logo"/>}/>
        <CardContent>
          <Typography variant="body2" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default StonehillCard;
