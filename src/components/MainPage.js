import React from "react";
import Card from "./NewsCard";
import Grid from "@material-ui/core/Grid";
import useAxios from "axios-hooks";
import { CircularProgress } from "@material-ui/core";
const MainPage = () => {
  const [{ data, loading, error }] = useAxios(
    "https://nl-static-site-assets.s3.ap-south-1.amazonaws.com/reports.json"
  );

  if (loading) return <CircularProgress />;
  if (error) return alert("Please try again after sometime.");

  return (
    console.log(data.items[0].story.url),
    (
      <div>
        <Grid container spacing={4}>
          {data.items.map((item) => (
            <Grid item xs={12} sm={6} md={3}>
              <Card
                descp={item.item.headline[0]}
                image={item.story["hero-image-s3-key"]}
                id={item.id}
                url={item.story.url}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  );
};
export default MainPage;
