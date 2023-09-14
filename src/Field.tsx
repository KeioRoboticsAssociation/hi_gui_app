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
import shoot from "./assets/shoot.mp3";

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

const ColorSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  transform: "scale(2.5)",
  position: "absolute",
  zIndex: 1,
  top: "57%",
  left: "7%",
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%) scale(4)", // adjust scale to make switch bigger
      width: 16,
      height: 16,
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
}));

const ros = new ROSLIB.Ros({
  url: "ws://moyuboo.local:9090",
});

const indextopic = new ROSLIB.Topic({
  ros: ros,
  name: "/index",
  messageType: "std_msgs/Int8",
});

const shootingtopic = new ROSLIB.Topic({
  ros: ros,
  name: "/shooting_index",
  messageType: "std_msgs/Int8",
});

const isManualTopic = new ROSLIB.Topic({
  ros: ros,
  name: "/is_manual",
  messageType: "std_msgs/Bool",
});

const cmdtopic = new ROSLIB.Topic({
  ros: ros,
  name: "/cmd_state",
  messageType: "std_msgs/String",
});

const emgtopic = new ROSLIB.Topic({
  ros: ros,
  name: "/emergency",
  messageType: "std_msgs/Bool",
});

const stptopic = new ROSLIB.Topic({
  ros: ros,
  name: "/stp_homing",
  messageType: "std_msgs/Bool",
});

export default function Field({color}) {
  const [isManual, setIsManual] = useState(false);
  if (color) {
    return (
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <StyledField style={{ width: "60%", margin: "auto" }}>
          <StyledButton
            variant="outlined"
            style={{ top: "35.9%", left: "12.6%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
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
            style={{ top: "35.9%", left: "26.4%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
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
            style={{ top: "35.9%", left: "40.1%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
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
            style={{ top: "35.9%", left: "53.5%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 3,
              });
              indextopic.publish(msg);
            }}
          >
            3
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "35.9%", left: "67.4%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 4,
              });
              indextopic.publish(msg);
            }}
          >
            4
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "35.9%", left: "80.7%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 5,
              });
              indextopic.publish(msg);
            }}
          >
            5
          </StyledButton>

          {/* <StyledButton variant="outlined" style={{ top: "8.8%", left: "7%" }}
          onClick={() => {
              const audio = new Audio(pos);
              audio.play();
            const msg = new ROSLIB.Message({
              data: 6,
            });
            indextopic.publish(msg);
          }}>
            6
          </StyledButton> */}
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "18.1%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 7,
              });
              indextopic.publish(msg);
            }}
          >
            7
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "27.7%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 8,
              });
              indextopic.publish(msg);
            }}
          >
            8
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "37.2%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 9,
              });
              indextopic.publish(msg);
            }}
          >
            9
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "46.9%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 10,
              });
              indextopic.publish(msg);
            }}
          >
            10
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "56.5%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 11,
              });
              indextopic.publish(msg);
            }}
          >
            11
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "66.1%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 12,
              });
              indextopic.publish(msg);
            }}
          >
            12
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "75.7%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 13,
              });
              indextopic.publish(msg);
            }}
          >
            13
          </StyledButton>
          {/* <StyledButton variant="outlined" style={{ top: "8.8%", left: "83.8%" }}
          onClick={() => {
              const audio = new Audio(pos);
              audio.play();
            const msg = new ROSLIB.Message({
              data: 14,
            });
            indextopic.publish(msg);
          }}>
            14
          </StyledButton> */}
          <StyledButton
            variant="outlined"
            style={{ top: "23%", left: "78.7%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 15,
              });
              indextopic.publish(msg);
            }}
          >
            15
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "61%", left: "90.4%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 0,
              });
              shootingtopic.publish(msg);
            }}
          >
            0
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "66%", left: "90.4%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 1,
              });
              shootingtopic.publish(msg);
            }}
          >
            1
          </StyledButton>

          <StyledButton
            variant="outlined"
            style={{ top: "74%", left: "90.4%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 2,
              });
              shootingtopic.publish(msg);
            }}
          >
            2
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "79%", left: "90.4%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 3,
              });
              shootingtopic.publish(msg);
            }}
          >
            3
          </StyledButton>

          <StyledButton
            variant="outlined"
            style={{ top: "88%", left: "90.4%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 4,
              });
              shootingtopic.publish(msg);
            }}
          >
            4
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "93%", left: "90.4%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 5,
              });
              shootingtopic.publish(msg);
            }}
          >
            5
          </StyledButton>

          <StyledButton
            variant="outlined"
            style={{ top: "77.5%", left: "80%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 6,
              });
              shootingtopic.publish(msg);
            }}
          >
            6
          </StyledButton>

          <StyledButton
            variant="outlined"
            style={{ top: "23%", left: "70%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 7,
              });
              shootingtopic.publish(msg);
            }}
          >
            7
          </StyledButton>

          <img
            src={blueImg}
            alt="blue image"
            style={{ height: "100%", margin: "auto" }}
          />
        </StyledField>

        <ColorSwitch 
        onChange={() => {
          setIsManual(!isManual);
          const msg = new ROSLIB.Message({
            data: !isManual,
          });
          isManualTopic.publish(msg);
        }}
        />
        <ProButton
          variant="outlined"
          style={{ top: "88%", left: "86%", width: "160px" }}
          onClick={() => {
              const audio = new Audio(pos);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "n",
            });
            cmdtopic.publish(msg);
          }}
        >
          NEXT
        </ProButton>
        <ProButton
          variant="outlined"
          style={{ top: "88%", left: "2%", width: "160px" }}
          onClick={() => {
              const audio = new Audio(pos);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "b",
            });
            cmdtopic.publish(msg);
          }}
        >
          BACK
        </ProButton>

        <DefaultButton
          variant="contained"
          style={{ top: "65%", left: "86%", width: "160px" }}
          onClick={() => {
              const audio = new Audio(pos);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "c",
            });
            cmdtopic.publish(msg);
          }}
        >
          CATCH
        </DefaultButton>
        <DefaultButton
          variant="contained"
          style={{ top: "75%", left: "86%", width: "160px" }}
          onClick={() => {
              const audio = new Audio(pos);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "r",
            });
            cmdtopic.publish(msg);
          }}
        >
          RELEASE
        </DefaultButton>
        <DefaultButton
          variant="contained"
          style={{ top: "25%", left: "86%", width: "160px" }}
          onClick={() => {
              const audio = new Audio(pos);
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
          color="error"
          style={{
            top: "5%",
            left: "86%",
            width: "160px",
            height: "160px",
            borderRadius: "100%",
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
    );
  } else {
    return (
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <StyledField style={{ width: "60%", margin: "auto" }}>
          <StyledButton
            variant="outlined"
            style={{ top: "35.9%", left: "12.6%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
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
            style={{ top: "35.9%", left: "26.4%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
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
            style={{ top: "35.9%", left: "40.1%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
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
            style={{ top: "35.9%", left: "53.5%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 3,
              });
              indextopic.publish(msg);
            }}
          >
            3
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "35.9%", left: "67.4%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 4,
              });
              indextopic.publish(msg);
            }}
          >
            4
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "35.9%", left: "80.7%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 5,
              });
              indextopic.publish(msg);
            }}
          >
            5
          </StyledButton>

          {/* <StyledButton variant="outlined" style={{ top: "8.8%", left: "7%" }}
          onClick={() => {
              const audio = new Audio(pos);
              audio.play();
            const msg = new ROSLIB.Message({
              data: 6,
            });
            indextopic.publish(msg);
          }}>
            6
          </StyledButton> */}
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "18.1%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 7,
              });
              indextopic.publish(msg);
            }}
          >
            7
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "27.7%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 8,
              });
              indextopic.publish(msg);
            }}
          >
            8
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "37.2%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 9,
              });
              indextopic.publish(msg);
            }}
          >
            9
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "46.9%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 10,
              });
              indextopic.publish(msg);
            }}
          >
            10
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "56.5%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 11,
              });
              indextopic.publish(msg);
            }}
          >
            11
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "66.1%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 12,
              });
              indextopic.publish(msg);
            }}
          >
            12
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "8.8%", left: "75.7%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 13,
              });
              indextopic.publish(msg);
            }}
          >
            13
          </StyledButton>
          {/* <StyledButton variant="outlined" style={{ top: "8.8%", left: "83.8%" }}
          onClick={() => {
              const audio = new Audio(pos);
              audio.play();
            const msg = new ROSLIB.Message({
              data: 14,
            });
            indextopic.publish(msg);
          }}>
            14
          </StyledButton> */}

          <StyledButton
            variant="outlined"
            style={{ top: "23%", left: "21%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 15,
              });
              indextopic.publish(msg);
            }}
          >
            15
          </StyledButton>

          <StyledButton
            variant="outlined"
            style={{ top: "61%", left: "3%" }}
            onClick={() => {
              const audio = new Audio(shoot);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 0,
              });
              shootingtopic.publish(msg);
            }}
          >
            A
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "66%", left: "3%" }}
            onClick={() => {
              const audio = new Audio(shoot);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 1,
              });
              shootingtopic.publish(msg);
            }}
          >
            B
          </StyledButton>

          <StyledButton
            variant="outlined"
            style={{ top: "74%", left: "3%" }}
            onClick={() => {
              const audio = new Audio(shoot);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 2,
              });
              shootingtopic.publish(msg);
            }}
          >
            C
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "79%", left: "3%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 3,
              });
              shootingtopic.publish(msg);
            }}
          >
          D
          </StyledButton>

          <StyledButton
            variant="outlined"
            style={{ top: "88%", left: "3%" }}
            onClick={() => {
              const audio = new Audio(shoot);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 4,
              });
              shootingtopic.publish(msg);
            }}
          >
            E
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "93%", left: "3%" }}
            onClick={() => {
              const audio = new Audio(shoot);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 5,
              });
              shootingtopic.publish(msg);
            }}
          >
            F
          </StyledButton>

          <StyledButton
            variant="outlined"
            style={{ top: "72.5%", left: "13.5%" }}
            onClick={() => {
              const audio = new Audio(shoot);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 6,
              });
              shootingtopic.publish(msg);
            }}
          >
            G0
          </StyledButton>
          <StyledButton
            variant="outlined"
            style={{ top: "82.5%", left: "13.5%" }}
            onClick={() => {
              const audio = new Audio(shoot);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 8,
              });
              shootingtopic.publish(msg);
            }}
          >
            G1
          </StyledButton>

          <StyledButton
            variant="outlined"
            style={{ top: "23%", left: "30%" }}
            onClick={() => {
              const audio = new Audio(pos);
              audio.play();
              const msg = new ROSLIB.Message({
                data: 7,
              });
              shootingtopic.publish(msg);
            }}
          >
            7
          </StyledButton>

          <img
            src={redImg}
            alt="red image"
            style={{ height: "100%", margin: "auto" }}
          />
        </StyledField>

        <ColorSwitch 
        onChange={() => {
          setIsManual(!isManual);
          const msg = new ROSLIB.Message({
            data: !isManual,
          });
          isManualTopic.publish(msg);
        }}/>
        <ProButton
          variant="outlined"
          style={{ top: "88%", left: "86%", width: "160px" }}
          onClick={() => {
              const audio = new Audio(next);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "n",
            });
            cmdtopic.publish(msg);
          }}
        >
          NEXT
        </ProButton>
        <ProButton
          variant="outlined"
          style={{ top: "88%", left: "2%", width: "160px" }}
          onClick={() => {
              const audio = new Audio(next);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "b",
            });
            cmdtopic.publish(msg);
          }}
        >
          BACK
        </ProButton>

        <DefaultButton
          variant="contained"
          style={{ top: "65%", left: "86%", width: "160px" }}
          onClick={() => {
              const audio = new Audio(pecho);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "c",
            });
            cmdtopic.publish(msg);
          }}
        >
          CATCH
        </DefaultButton>
        <DefaultButton
          variant="contained"
          style={{ top: "75%", left: "86%", width: "160px" }}
          onClick={() => {
              const audio = new Audio(pecho);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "r",
            });
            cmdtopic.publish(msg);
          }}
        >
          RELEASE
        </DefaultButton>
        <DefaultButton
          variant="contained"
          color='secondary'
          style={{ top: "55%", left: "86%", width: "70px" }}
          onClick={() => {
              const audio = new Audio(pecho);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "c0",
            });
            cmdtopic.publish(msg);
          }}
        >
          C0
        </DefaultButton>
        <DefaultButton
          variant="contained"
          color='secondary'
          style={{ top: "55%", left: "92.8%", width: "70px" }}
          onClick={() => {
              const audio = new Audio(pecho);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "r0",
            });
            cmdtopic.publish(msg);
          }}
        >
          R0
        </DefaultButton>

        <DefaultButton
          variant="contained"
          color="success"
          style={{ top: "46%", left: "86%", width: "70px" }}
          onClick={() => {
              const audio = new Audio(pecho);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "c1",
            });
            cmdtopic.publish(msg);
          }}
        >
          C1
        </DefaultButton>
        <DefaultButton
          variant="contained"
          color="success"
          style={{ top: "46%", left: "92.8%", width: "70px" }}
          onClick={() => {
              const audio = new Audio(pecho);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "r1",
            });
            cmdtopic.publish(msg);
          }}
        >
          R1
        </DefaultButton>

        <DefaultButton
          variant="contained"
          color="warning"
          style={{ top: "37%", left: "86%", width: "70px" }}
          onClick={() => {
              const audio = new Audio(pecho);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "c2",
            });
            cmdtopic.publish(msg);
          }}
        >
          C2
        </DefaultButton>
        <DefaultButton
          variant="contained"
          color="warning"
          style={{ top: "37%", left: "92.8%", width: "70px" }}
          onClick={() => {
              const audio = new Audio(pecho);
              audio.play();
            const msg = new ROSLIB.Message({
              data: "r2",
            });
            cmdtopic.publish(msg);
          }}
        >
          R2
        </DefaultButton>
        <DefaultButton
          variant="contained"
          style={{ top: "25%", left: "86%", width: "70px" }}
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
          style={{ top: "25%", left: "92.8%", width: "70px" }}
          onClick={() => {
              const audio = new Audio(pecho);
              audio.play();
            const msg = new ROSLIB.Message({
              data: true,
            });
            stptopic.publish(msg);
          }}
        >
          STP
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
    );
  }
}
