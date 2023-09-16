import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ROSLIB from "roslib";
import { Root } from "./style";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import Field from "./Field";
import Button from "@mui/material/Button";

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

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  transform: "scale(2)",
  position: "absolute",
  zIndex: 1,
  top: "18%",
  left: "4%",
  opacity: 1,
  "& .Mui-checked": {
    "& + .MuiSwitch-track": {
      borderRadius: 22 / 2,
      backgroundColor: "#8682ff",
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%) scale(4)", // adjust scale to make switch bigger
        width: 16,
        height: 16,
      },
    },
    "&:before": {},
    "&:after": {},
  },

  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    backgroundColor: "#ff0000",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%) scale(4)", // adjust scale to make switch bigger
      width: 16,
      height: 16,
    },
  },
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

function Home() {
  const [connection, setConnection] = useState("");
  const [isOn, setIsOn] = useState(false);
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

  const [color, setColor] = useState(true);
  const handleSwitchChange = () => {
    setColor(!color);
  };
  if (1) {
    return (
      <Root>
        <StyledHome>
          <Clock />
          <Android12Switch onChange={handleSwitchChange} />
          <State />
          <DefaultButton
            variant="contained"
            color="success"
            style={{ top: "28%", left: "3%", width: "160px", zIndex: 1 }}
            onClick={() => {
              const msg = new ROSLIB.Message({
                data: true,
              });
              comtopic.publish(msg);
              setIsOn(true);
            }}
          >
            TURN ON
          </DefaultButton>
          <Field color={!color} />
        </StyledHome>
      </Root>
    );
  } else {
    return (
      <Root>
        <StyledHome>
          <Clock />
          <Android12Switch onChange={handleSwitchChange} />
          <State />
          <Field color={!color} />
        </StyledHome>
      </Root>
    );
  }
}

export default Home;
