import { styled } from "@mui/styles";
import React from "react";
import { TextField } from "@mui/material";

// export default function TextFieldStyled({
//   label,
//   eventCallback,
//   value,
//   width,
//   darkMode,
//   type,
// }) {
//   return (
//     <TextField
//       // id="outlined-required"
//       fullWidth
//       label={label}
//       id="fullWidth"
//       type={type}
//       InputLabelProps={{
//         style: { color: `${darkMode ? "#ffffff" : "black"}` },
//       }}
//       inputProps={{ style: { color: `${darkMode ? "#ffffff" : "black"}` } }}
//       onChange={eventCallback}
//       value={value}
//       sx={{
//         width: width,
//         maxWidth: "100%",

//       }}
//     />
//   );
// }

const TextFieldStyled = styled(TextField)(({ theme }) => ({
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
