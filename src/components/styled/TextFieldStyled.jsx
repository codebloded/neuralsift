import { styled } from "@mui/styles";
import React from "react";
import { TextField } from "@mui/material";

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.custom.primary.secondary,
    },

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.custom.primary.logoBlueFirstW,
    },
  },
}));

export default TextFieldStyled;
