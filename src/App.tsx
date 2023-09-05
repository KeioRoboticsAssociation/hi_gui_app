import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ROSLIB from "roslib";
import "./index.css";
import "./App.css";
import ConnectionScreen from "./Connection";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./fonts/Oxanium-Regular.ttf";
import AllScrollLock from "./AllScrollLock";
import Home from "./Home";

const ros = new ROSLIB.Ros({
  url: "ws://moyuboo.local:9090",
});

const topic = new ROSLIB.Topic({
  ros: ros,
  name: "/hello",
  messageType: "std_msgs/String",
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Oxanium", "sans-serif"].join(","),
  },
});

function App() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    const msg = new ROSLIB.Message({
      data: "Hello ROS2 Humble!",
    });
    topic.publish(msg);
    setMessage("Message sent!");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Home />
      <CssBaseline />
      <AllScrollLock />
    </ThemeProvider>
  );
}

export default App;
