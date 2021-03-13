import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import { SpeechState, useSpeechContext } from "@speechly/react-client";

import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
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
        style={{ height: "100vh" }}
      >
        <Grid
          ref={main}
          item
          xs={12}
          sm={7}
          className={classes.main}
          style={{ paddingTop: 50 }}
        >
          <Main />
        </Grid>
        <Grid item xs={12} sm={5} className={classes.mobile}>
          <Details
            title="Income"
            style={{
              paddingBottom: 40,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={5} className={classes.desktop}>
          <Details title="Income" style={{ paddingBottom: 40 }} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          className={classes.last}
          // style={{ paddingBottom: 10 }}
        >
          <Details title="Expense" style={{ paddingBottom: 40 }} />
        </Grid>
      </Grid>

      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
