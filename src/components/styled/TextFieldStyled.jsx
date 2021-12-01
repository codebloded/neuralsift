import React from "react";
import { TextField } from "@mui/material";

export default function TextFieldStyled({
  label,
  eventCallback,
  value,
  width,
  darkMode,
}) {
  return (
    <TextField
      // id="outlined-required"
      fullWidth
      label={label}
      id="fullWidth"
      InputLabelProps={{
        style: { color: `${darkMode ? "#ffffff" : "black"}` },
      }}
      inputProps={{ style: { color: `${darkMode ? "#ffffff" : "black"}` } }}
      onChange={eventCallback}
      value={value}
      sx={{
        width: width,
        maxWidth: "100%",

        "& .MuiInput-underline:after": {
          borderBottomColor: "#2f8deb",
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: `${darkMode ? "white" : "black"}`,
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: `${darkMode ? "white" : "black"}`,
          },

          "&.Mui-focused fieldset": {
            borderColor: "#2f8deb",
          },
        },
      }}
    />
  );
}
