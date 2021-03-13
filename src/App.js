import React from "react";
import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      ></Grid>
    </div>
  );
};

export default App;
