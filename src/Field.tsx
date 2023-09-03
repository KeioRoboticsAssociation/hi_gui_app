import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import blueImg from "./img-blue.svg";
import ROSLIB from "roslib";

const StyledField = styled.div(({ theme }) => ({
  height: "100%",
  padding: "1%",
  position: "relative",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  borderRadius: "100%",
  fontSize: "20px",
  fontWeight: "Bold",
  width: "5%!important",
}));

const ProButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  borderRadius: "100%",
  fontSize: "40px",
}));

const DefaultButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  fontSize: "30px",
}));
const ros = new ROSLIB.Ros({
  url: "ws://ubuntu.local:9090",
});

const indextopic = new ROSLIB.Topic({
  ros: ros,
  name: "/index",
  messageType: "std_msgs/Int8",
});

export default function Field() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <StyledField style={{ width: "60%", margin: "auto" }}>
        <StyledButton
          variant="outlined"
          style={{ top: "35.9%", left: "11.1%" }}
          onClick={() => {
            const msg = new ROSLIB.Message({
              data: 0,
            });
            indextopic.publish(msg);
          }}
        >
          0
        </StyledButton>
        <StyledButton
          variant="outlined"
          style={{ top: "35.9%", left: "24.9%" }}
          onClick={() => {
            const msg = new ROSLIB.Message({
              data: 1,
            });
            indextopic.publish(msg);
          }}
        >
          1
        </StyledButton>
        <StyledButton
          variant="outlined"
          style={{ top: "35.9%", left: "38.6%" }}
          onClick={() => {
            const msg = new ROSLIB.Message({
              data: 2,
            });
            indextopic.publish(msg);
          }}
        >
          2
        </StyledButton>
        <StyledButton
          variant="outlined"
          style={{ top: "35.9%", left: "52%" }}
          onClick={() => {
            const msg = new ROSLIB.Message({
              data: "3",
            });
            indextopic.publish(msg);
          }}
        >
          3
        </StyledButton>
        <StyledButton
          variant="outlined"
          style={{ top: "35.9%", left: "65.9%" }}
        >
          4
        </StyledButton>
        <StyledButton
          variant="outlined"
          style={{ top: "35.9%", left: "79.2%" }}
        >
          5
        </StyledButton>

        <StyledButton variant="outlined" style={{ top: "8.8%", left: "7%" }}>
          6
        </StyledButton>
        <StyledButton variant="outlined" style={{ top: "8.8%", left: "16.6%" }}>
          7
        </StyledButton>
        <StyledButton variant="outlined" style={{ top: "8.8%", left: "26.2%" }}>
          8
        </StyledButton>
        <StyledButton variant="outlined" style={{ top: "8.8%", left: "35.8%" }}>
          9
        </StyledButton>
        <StyledButton variant="outlined" style={{ top: "8.8%", left: "45.4%" }}>
          10
        </StyledButton>
        <StyledButton variant="outlined" style={{ top: "8.8%", left: "55%" }}>
          11
        </StyledButton>
        <StyledButton variant="outlined" style={{ top: "8.8%", left: "64.6%" }}>
          12
        </StyledButton>
        <StyledButton variant="outlined" style={{ top: "8.8%", left: "74.2%" }}>
          13
        </StyledButton>
        <StyledButton variant="outlined" style={{ top: "8.8%", left: "83.8%" }}>
          14
        </StyledButton>

        <StyledButton variant="outlined" style={{ top: "61%", left: "88.9%" }}>
          0
        </StyledButton>
        <StyledButton variant="outlined" style={{ top: "66%", left: "88.9%" }}>
          1
        </StyledButton>

        <StyledButton variant="outlined" style={{ top: "74%", left: "88.9%" }}>
          2
        </StyledButton>
        <StyledButton variant="outlined" style={{ top: "79%", left: "88.9%" }}>
          3
        </StyledButton>

        <StyledButton variant="outlined" style={{ top: "88%", left: "88.9%" }}>
          4
        </StyledButton>
        <StyledButton variant="outlined" style={{ top: "93%", left: "88.9%" }}>
          5
        </StyledButton>

        <StyledButton
          variant="outlined"
          style={{ top: "77.5%", left: "78.5%" }}
        >
          6
        </StyledButton>

        <img
          src={blueImg}
          alt="blue image"
          style={{ height: "100%", margin: "auto" }}
        />
      </StyledField>

      <ProButton
        variant="outlined"
        style={{ top: "88%", left: "86%", width: "160px" }}
      >
        NEXT
      </ProButton>
      <ProButton
        variant="outlined"
        style={{ top: "88%", left: "2%", width: "160px" }}
      >
        BACK
      </ProButton>

      <DefaultButton
        variant="contained"
        style={{ top: "65%", left: "86%", width: "160px" }}
      >
        CATCH
      </DefaultButton>
      <DefaultButton
        variant="contained"
        style={{ top: "75%", left: "86%", width: "160px" }}
      >
        RELEASE
      </DefaultButton>
      <DefaultButton
        variant="contained"
        style={{ top: "25%", left: "86%", width: "160px" }}
      >
        INIT
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
      >
        STOP
      </DefaultButton>
    </div>
  );
}
