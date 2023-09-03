import React, { useState, useEffect } from "react";
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

function ConnectionScreen() {
  const [connection, setConnection] = useState("");

  const handleChange = (event) => {
    setConnection(event.target.value);
  };

  const handleConnect = () => {
    // Connect to the selected connection
  };

  useEffect(() => {
    const paper = document.getElementById("styled-paper");
    paper.style.transform = "scaleX(0) scaleY(0.05)";
    setTimeout(() => {
      paper.style.transform = "scaleX(1) scaleY(0.05)";
      setTimeout(() => {
        paper.style.transform = "scaleX(1) scaleY(1)";
      }, 200);
    }, 100);
  }, []);

  return (
    <Root>
      <StyledPaper id="styled-paper">
        <StyledTitle variant="h6" style={{ color: "#FFFFFF" }}>
          Welcome to Hi GUI!
        </StyledTitle>
        <StyledFormControl>
          <InputLabel id="connection-label" style={{ color: "#FFFFFF" }}>
            Connection
          </InputLabel>
          <Select
            labelId="connection-label"
            id="connection"
            value={connection}
            onChange={handleChange}
            style={{ color: "#FFFFFF" }}
          >
            <MenuItem value="connection1">Connection 1</MenuItem>
            <MenuItem value="connection2">Connection 2</MenuItem>
            <MenuItem value="connection3">Connection 3</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledButton variant="contained" onClick={handleConnect}>
          Connect
        </StyledButton>
      </StyledPaper>
    </Root>
  );
}

export default ConnectionScreen;
