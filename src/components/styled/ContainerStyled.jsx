import { Container } from "@mui/material";

import { styled } from "@mui/styles";

const ContainerStyled = styled(Container)(({ theme }) => ({
  borderRadius: "18px",

  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.custom.primary.darkPaperBg
      : "#FFFFFF",
}));

export default ContainerStyled;
