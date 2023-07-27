/** @format */

import React from "react";
import { AppBar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "40px 100px",
    width: "fit-content",
    border: "2px dashed black",
  },
  image: { marginLeft: "15px" },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
