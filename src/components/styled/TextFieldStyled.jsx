import { styled } from "@mui/styles";
import React from "react";
import { TextField } from "@mui/material";

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor:
        theme.palette.mode === "dark"
          ? theme.palette.custom.primary.secondary
          : theme.palette.custom.primary.main,
    },

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.custom.primary.logoBlueFirstW,
    },
  },
}));

export default TextFieldStyled;
