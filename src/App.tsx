import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import ROSLIB from "roslib";
import "./index.css";
import "./App.css";
import ConnectionScreen from "./Connection";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./fonts/Oxanium-Regular.ttf";
import "./fonts/Oxanium-Bold.ttf";
import "./fonts/NotoSansJP-Light.ttf";
import AllScrollLock from "./AllScrollLock";
import Home from "./Home";
import Stop from "./Stop";
import AutoScreen from "./Auto";

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
    <div>
      <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="/em" element={<Emergency />} />
        <Route path="/auto" element={<Auto />} />
      </Routes>
    </div>
  );
}

function Screen() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Home />
        <CssBaseline />
        <AllScrollLock />
      </ThemeProvider>
    </div>
  );
}

function Emergency() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Stop />
      </ThemeProvider>
    </div>
  );
}

function Auto(){
  return(
    <div>
      <ThemeProvider theme={darkTheme}>
        <AutoScreen />
        <AllScrollLock />
      </ThemeProvider>
    </div>
  )
}

export default App;
