import { Paper } from "@mui/material";

import { styled } from "@mui/styles";

const PaperStyled = styled(Paper)(({ theme }) => ({
  borderRadius: "18px",
  boxShadow: "6px 5px 15px -3px rgba(0,0,0,0.20)",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.custom.primary.darkPaperBg
      : "#FFFFFF",
}));

export default PaperStyled;
