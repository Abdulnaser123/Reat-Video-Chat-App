/** @format */

import React, { useContext } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SocketContext } from "../socketContext";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "550px",
  },
  gridContainer: {
    justifyContent: "center",
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
}));

const VideoPlayer = () => {
  const {
    callAccepted,
    myVideo,
    stream,
    name,
    callEnded,
  } = useContext(SocketContext);
  const classes = useStyles();
  return (
    // my video
    <Grid container className={classes.gridContainer}>
      {stream && <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant='h5' gutterBottom>
            {name || "me"}
          </Typography>

          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className={classes.video}
          />
        </Grid>
      </Paper>}
      {/* friend video */}
      <Paper className={classes.paper}>
        {callAccepted && !callEnded (
            <Grid item xs={12} md={6}>
          <Typography variant='h5' gutterBottom>
            Friend
          </Typography>
          <video
            playsInline
            muted
            ref={null}
            autoPlay
            className={classes.video}
          />
        </Grid>
        )}
      
      </Paper>
    </Grid>
  );
};

export default VideoPlayer;
