import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ROSLIB from "roslib";
import {
  Root,
  StyledButton,
  StyledFormControl,
  StyledPaper,
  StyledTitle,
} from "./style";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import StyleTab from "./Tab";
import Field from "./Field";

const StyledHome = styled(Paper)(({ theme: Any }) => ({
  // padding: theme.spacing(8),
  color: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 0.2s ease-in-out",
  backgroundColor: "rgba(255,255, 255, 0.1)",
  width: "95%",
  height: "95vh",
  position: "absolute",
  borderRadius: "40px",
}));

const StyleClock = styled.div(({ theme }) => ({
  position: "absolute",
  top: "20px",
  left: "40px",
  fontSize: "40pt",
  zIndex: 1,
}));

const StyleState = styled.div(({ theme }) => ({
  position: "absolute",
  width: "auto",
  top: "65%",
  left: "5%",
}));

const ros = new ROSLIB.Ros({
  url: "ws://moyuboo.local:9090",
});

function Clock() {
  const [sec, setSec] = useState(0);
  const [flg, setFlg] = useState(false);

  useEffect(() => {
    setSec(180);
  }, []);

  const handleClick = () => {
    if (!flg) {
      setFlg(true);
      const interval = setInterval(() => {
        setSec((sec) => {
          if (sec === 0) {
            setFlg(true);
            clearInterval(interval);
            setSec(180);
          }
          return sec - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  };

  return (
    <StyleClock onClick={handleClick}>
      {("0" + Math.floor(sec / 60)).slice(-2)}:
      {("0" + Math.floor(sec % 60)).slice(-2)}
    </StyleClock>
  );
}

function State() {
  const [state, setState] = useState(0);
  useEffect(() => {
    const listener = new ROSLIB.Topic({
      ros: ros,
      name: "/state_data",
      messageType: "std_msgs/Int32MultiArray",
    });
    listener.subscribe((message:any) => {
      console.log(message.data[0]);
      setState(message.data[0]);
    });
  }, []);
  return (
    <StyleState>
      <p
        style={{
          fontStyle: "italic",
          fontSize: "25pt",
          margin: "5%",
          textAlign: "right",
          right: "30px",
        }}
      >
        State
      </p>
      <p
        style={{
          fontSize: "55pt",
          margin: "5%",
          textAlign: "right",
          right: "0",
        }}
      >
        {state}
      </p>
    </StyleState>
  );
}

function Home() {
  const [connection, setConnection] = useState("");
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setConnection(event.target.value);
  };

  const handleConnect = () => {
    // Connect to the selected connection
  };

  useEffect(() => {
    // const paper = document.getElementById("styled-paper");
    // paper.style.transform = "scaleX(0) scaleY(0.05)";
    // setTimeout(() => {
    //   paper.style.transform = "scaleX(1) scaleY(0.05)";
    //   setTimeout(() => {
    //     paper.style.transform = "scaleX(1) scaleY(1)";
    //   }, 200);
    // }, 100);
  }, []);

  return (
    <Root>
      <StyledHome>
        <Clock />
        <State />
        <Field />
      </StyledHome>
    </Root>
  );
}

export default Home;
