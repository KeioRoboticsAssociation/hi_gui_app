import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import blueImg from "./img-blue.svg";
import redImg from "./img-red.svg";
import ROSLIB from "roslib";
import next from "./assets/next.mp3";
import pos from "./assets/pos.mp3";
import pecho from "./assets/pecho.mp3";

const DefaultButton = styled(Button)(({ theme }) => ({
  position: "relative",
  fontSize: "30px",
}));

const ros = new ROSLIB.Ros({
  url: "ws://moyuboo.local:9090",
});
const emgtopic = new ROSLIB.Topic({
  ros: ros,
  name: "/emergency",
  messageType: "std_msgs/Bool",
});

export default function Stop() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <div style={{ margin: "auto", width: "320px",height:"320px",marginTop:"200px" }}>
        <DefaultButton
          variant="contained"
          color="error"
          style={{
            margin: "auto",
            width: "320px",
            height: "320px",
            borderRadius: "100%",
            fontSize: "80px",
          }}
          onClick={() => {
            const audio = new Audio(pos);
            audio.play();
            const msg = new ROSLIB.Message({
              data: true,
            });
            emgtopic.publish(msg);
          }}
        >
          STOP
        </DefaultButton>
      </div>
    </div>
  );
}
