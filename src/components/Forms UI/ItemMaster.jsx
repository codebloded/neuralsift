import {
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import Axios from "axios";
import { Box } from "@mui/system";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import TextFieldStyled from "components/styled/TextFieldStyled";
import { UserContext } from "context/UserContext";
import { styled } from "@mui/styles";
import { Add } from "@mui/icons-material";

export default function ItemMaster() {
  const [code, setCode] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [subCategory, setSubCatogery] = React.useState("");
  const [item, setItem] = React.useState("");
  const [supplier, setSupplier] = React.useState("");
  const [umo, setUmo] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [moq, setMoq] = React.useState("");
  console.log(code, description, category, subCategory, supplier, umo);

  const [data, setData] = React.useState([]);
  const { darkMode } = React.useContext(UserContext);
  const handleChange = (event) => {
    setSupplier(event.target.value);
  };
  React.useEffect(() => {}, []);
  // console.log(data)
  const send = () => {
    const data = new FormData();
    data.append("supplier", supplier);
    data.append("item code", code);
    data.append("description", description);
    data.append("category", category);
    data.append("sub category", subCategory);
    data.append("umo", umo);
    data.append("moq", moq);

    Axios.post("http://localhost:5000/item", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container
      sx={{
        padding: "20px",
        mt: "70px",
        // border: "1px solid red",
        backgroundColor: `${darkMode ? "#161B22" : "#f0f7ff"}`,
        borderRadius: "15px",
        color: `${darkMode ? "white" : "black"}`,
        borderLeft: "7px solid #2f8deb",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <TextField
            select
            label="Supplier"
            InputLabelProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            inputProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            value={supplier}
            onChange={handleChange}
            helperText=" Please Select the Supplier"
            variant="standard"
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            {data.map((option) => (
              <MenuItem value={option.supplierName} key={option._id}>
                {option.supplierName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Button sx={{ color: "white" }} startIcon={<Add />}>
            Create New Item
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
