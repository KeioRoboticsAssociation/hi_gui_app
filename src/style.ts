import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(to bottom, #211f20, #11283b)",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(8),
  color: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 0.2s ease-in-out",
  backgroundColor: "rgba(255,255, 255, 0.0)",
  transform: "scale(0)",
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(4),
  width: "400px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  width: "150px",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: "16px",
  textAlign: "center",
}));

export { Root, StyledPaper, StyledFormControl, StyledButton, StyledTitle };
