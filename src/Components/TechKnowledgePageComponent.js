import { CardContent, Card, CardHeader, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    maxWidth: 500,
  }
}));

function TechKnowledgePageComponent() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="header"></Typography>
      <Card className={classes.card}>
        
      </Card>
    </div>
  );
}

export default TechKnowledgePageComponent;
