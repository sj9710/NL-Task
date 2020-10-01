import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function NewsCard({ descp, image, id, url }) {
  const classes = useStyles();
  const img = `https://gumlet.assettype.com/${image}`;
  const [color, setColor] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem(id) !== null) {
      setColor("red");
    }
  }, []);
  const favoriteItem = () => {
    if (color === "red") {
      setColor("");
      localStorage.removeItem(id);
    } else {
      setColor("red");
      localStorage.setItem(id, true);
    }
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={img} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <a href={url} target="_blank" className={classes.link}>
            {" "}
            {descp}
          </a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color: color }} onClick={favoriteItem} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
