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
  React.useEffect(() => {
    Axios.get("/supplier")
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  // console.log(data)
  const send = () => {
    const data = new FormData();
    data.append("supplier", supplier);
    data.append("item code", code);
    data.append("description", description);
    data.append("category", category);
    data.append("sub category", subCategory);
    data.append("umo", umo);
    data.append("price", price);
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
          <TextFieldStyled
            // id="outlined-required"
            label="Item code"
            value={code}
            eventCallback={(event) => setCode(event.target.value)}
            placeholder="Code"
            darkMode={darkMode}
          />
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextFieldStyled
            label="Item Description"
            value={description}
            eventCallback={(event) => setDescription(event.target.value)}
            darkMode={darkMode}
            width="500"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            select
            label="Category"
            InputLabelProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            inputProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            value={supplier}
            onChange={handleChange}
            variant="standard"
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            {data.map((option) => (
              <MenuItem value={option.supplier} key={option._id}>
                {option.supplier}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            select
            label="Sub Category"
            InputLabelProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            inputProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            value={supplier}
            onChange={handleChange}
            variant="standard"
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            {data.map((option) => (
              <MenuItem value={option.supplier} key={option._id}>
                {option.supplier}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
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
              <MenuItem value={option.supplier} key={option._id}>
                {option.supplier}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} lg={5}>
          <TextFieldStyled
            label="UMO"
            value={umo}
            width="500"
            eventCallback={(event) => setUmo(event.target.value)}
            darkMode={darkMode}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextFieldStyled
            label="Price Per Unit"
            value={price}
            width="500"
            eventCallback={(event) => setPrice(event.target.value)}
            darkMode={darkMode}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextFieldStyled
            label="MOQ"
            value={moq}
            width="500"
            eventCallback={(event) => setMoq(event.target.value)}
            darkMode={darkMode}
            variant="standard"
          />
        </Grid>
        <Grid item lg={12} alignContent="center">
          <Button
            variant="contained"
            onClick={send}
            sx={{
              backgroundColor: "#2876c5",
              position: "relative",
              left: { xs: "80%", lg: "40%" },
            }}
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
