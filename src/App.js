import React, { useEffect, useRef } from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import { SpeechState, useSpeechContext } from "@speechly/react-client";

import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import DetailsByDate from "./components/Details/DetailsByDate";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();
  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "70vh" }}
      >
        <Grid
          ref={main}
          item
          xs={12}
          sm={8}
          className={classes.main}

        >
          <Main />
        </Grid>
      </Grid>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "60vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details
            title="Income"

          />
        </Grid>

        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          className={classes.last}
        // style={{ paddingBottom: 10 }}
        >
          <Details title="Expense" />
        </Grid>
      </Grid>

      <Grid container spacing={4} alignItems="center" justify="center" style={{ height: '60vh' }}>
        <Grid item xs={12} sm={4} className={classes.last}>
          <DetailsByDate title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <DetailsByDate title='Expense' />
        </Grid>

        <PushToTalkButtonContainer>
          <ErrorPanel />
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
    </div>
  );
};

export default App;
