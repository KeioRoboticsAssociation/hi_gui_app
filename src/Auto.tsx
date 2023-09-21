import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ROSLIB from "roslib";
import { Root } from "./style";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import Field from "./Field";
import Button from "@mui/material/Button";
import pecho from "./assets/pecho.mp3";

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
  fontFamily: "'Oxanium','Noto Sans JP'",
}));

const StyleClock = styled.div(({ theme }) => ({
  position: "absolute",
  top: "20px",
  left: "40px",
  fontSize: "40pt",
  zIndex: 1,
  fontFamily: "Oxanium",
}));

const StyleState = styled.div(({ theme }) => ({
  position: "absolute",
  width: "auto",
  top: "65%",
  left: "5%",
}));

const DefaultButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  fontSize: "30px",
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

const comtopic = new ROSLIB.Topic({
  ros: ros,
  name: "/connect",
  messageType: "std_msgs/Bool",
});

const emgtopic = new ROSLIB.Topic({
  ros: ros,
  name: "/emergency",
  messageType: "std_msgs/Bool",
});

const cmdtopic = new ROSLIB.Topic({
  ros: ros,
  name: "/cmd_state",
  messageType: "std_msgs/String",
});

const autotopic = new ROSLIB.Topic({
  ros: ros,
  name: "/auto_start",
  messageType: "std_msgs/Bool",
});

function State() {
  const [state, setState] = useState(0);
  useEffect(() => {
    const listener = new ROSLIB.Topic({
      ros: ros,
      name: "/state_data",
      messageType: "std_msgs/Int32MultiArray",
    });
    listener.subscribe((message: any) => {
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

function AutoScreen() {
  const [connection, setConnection] = useState("");
  const [isOn, setIsOn] = useState(false);
  const msg = ["待機中", "運転中"];
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setConnection(event.target.value);
  };

  const handleConnect = () => {
    // Connect to the selected connection
  };

  const [sec, setSec] = useState(0);
  const [flg, setFlg] = useState(false);

  useEffect(() => {
    setSec(180);
  }, []);
  let interval: any;
  const handleClick = () => {
    if (!flg) {
      setFlg(true);
      interval = setInterval(() => {
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

  const [color, setColor] = useState(true);
  const handleSwitchChange = () => {
    setColor(!color);
  };
  useEffect(() => {
    const listener = new ROSLIB.Topic({
      ros: ros,
      name: "/auto_finish",
      messageType: "std_msgs/Bool",
    });
    listener.subscribe((message: any) => {
      setIsOn(message.data);
      setSec(0)
    });
  }, []);
  return (
    <Root>
      <StyledHome>
        <StyleClock onClick={handleClick}>
          {("0" + Math.floor(sec / 60)).slice(-2)}:
          {("0" + Math.floor(sec % 60)).slice(-2)}
        </StyleClock>
        {/* <Android12Switch onChange={handleSwitchChange} /> */}
        <State />
        <DefaultButton
          variant="contained"
          color="success"
          style={{ top: "25%", left: "86%", width: "70px" }}
          onClick={() => {
            const msg = new ROSLIB.Message({
              data: true,
            });
            comtopic.publish(msg);
          }}
        >
          ON
        </DefaultButton>
        <DefaultButton
          variant="contained"
          color="error"
          style={{
            top: "5%",
            left: "86%",
            width: "160px",
            height: "160px",
            borderRadius: "100%",
          }}
          onClick={() => {
            const msg = new ROSLIB.Message({
              data: true,
            });
            emgtopic.publish(msg);
            setSec(0)
          }}
        >
          STOP
        </DefaultButton>
        <DefaultButton
          variant="contained"
          style={{ top: "25%", left: "92.8%", width: "70px" }}
          onClick={() => {
            const audio = new Audio(pecho);
            audio.play();
            const msg = new ROSLIB.Message({
              data: "i",
            });
            cmdtopic.publish(msg);
          }}
        >
          INIT
        </DefaultButton>
        <DefaultButton
          variant="contained"
          color="success"
          style={{
            top: "60%",
            left: "41%",
            width: "240px",
            height: "120px",
            zIndex: 1,
            fontSize: 60,
          }}
          onClick={() => {
            const msg = new ROSLIB.Message({
              data: true,
            });
            autotopic.publish(msg);
            setIsOn(true);
            handleClick();
          }}
          disabled={isOn}
        >
          START
        </DefaultButton>
        <div style={{ position: "absolute", top: "30%", fontSize: 120 }}>
          {msg[Number(isOn)]}
        </div>
        {/* <Field color={!color} /> */}
      </StyledHome>
    </Root>
  );
}

export default AutoScreen;
