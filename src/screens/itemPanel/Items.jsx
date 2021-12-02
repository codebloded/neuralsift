import {
  Button,
  Grid,
  Input,
  Stack,
  Typography,
  Container,
  Divider,
  TextField,
  MenuItem,
  Autocomplete,
  IconButton,
  Paper,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PaperStyled from "components/styled/PaperStyled";
// import { ToastContainer,  } from "react-toastify";

import Axios from "axios";
import { getAllSuppliers, getSupplierDetails } from "api/apis";
import { Add, CenterFocusStrongRounded, Clear } from "@mui/icons-material";
import { Box } from "@mui/system";
import { UserContext } from "context/UserContext";

import React, { useContext, useEffect, useState } from "react";
import TextFieldStyled from "components/styled/TextFieldStyled";
import ContainerStyled from "components/styled/ContainerStyled";

export default function Item() {
  const theme = useTheme();
  const { darkMode, baseUrl } = useContext(UserContext);

  const [supplierData, setSupplierData] = useState(null);
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const [data, setData] = useState([]);
  const [supplierID, setSupplierID] = useState(null);
  const [showForm, setShowForm] = useState(false);
  //item master states
  const [code, setCode] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [subCategory, setSubCatogery] = React.useState("");
  const [item, setItem] = React.useState("");
  const [supplier, setSupplier] = React.useState("");
  const [umo, setUmo] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [moq, setMoq] = React.useState("");
  const [loading, setLoading] = useState("");
  console.log(supplierID);
  useEffect(() => {
    getAllSuppliers().then((res) => {
      if (res) {
        setData(res.data.data);
        setFilteredSuppliers(res.data.data);
      }
    });
  }, []);

  const handleSupplierSearch = (event) => {
    if (event.target.value === "") {
      setFilteredSuppliers(data);
    } else {
      const newData = data.filter((supplier) => {
        return supplier.supplierName.includes(event.target.value);
      });
      setFilteredSuppliers(newData);
    }
    setSupplierID(event.target.value);
  };
  useEffect(() => {
    if (supplierID === null || supplierID === "") return;
    getSupplierDetails(supplierID).then((res) => {
      setSupplierData(res.data.data);
    });
  }, [supplierID]);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Container>
        <Grid
          container
          spacing={3}
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
            my: "1em",

            padding: 0,
          }}
        >
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Grid>
              <PaperStyled elevation={0} sx={{ height: "100%", width: "100%" }}>
                <ContainerStyled
                  sx={{
                    padding: "2em 2em",

                    borderLeft: "7px solid #2f8deb",
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                      <Autocomplete
                        freeSolo
                        onChange={(event, value) => {
                          if (value !== null) {
                            setSupplierID(value.split(",")[1]);
                          }
                        }}
                        options={filteredSuppliers.map(
                          (option) => option.supplierName + "," + option._id
                        )}
                        renderInput={(params) => (
                          <TextField
                            onChange={handleSupplierSearch}
                            {...params}
                            label="Supplier Name"
                          />
                        )}
                      />
                      {!showForm && (
                        <Button
                          sx={{ my: 2 }}
                          onClick={handleShowForm}
                          startIcon={<Add />}
                        >
                          Add Item
                        </Button>
                      )}
                    </Grid>
                    {showForm && (
                      <>
                        <Grid item xs={12} lg={9}>
                          <TextFieldStyled
                            // id="outlined-required"
                            label="Item code"
                            value={code}
                            eventCallback={(event) =>
                              setCode(event.target.value)
                            }
                            placeholder="Code"
                            darkMode={darkMode}
                          />
                        </Grid>
                        <Grid item xs={12} lg={12}>
                          <TextFieldStyled
                            label="Item Description"
                            value={description}
                            eventCallback={(event) =>
                              setDescription(event.target.value)
                            }
                            darkMode={darkMode}
                            width="500"
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <TextField
                            select
                            label="Category"
                            InputLabelProps={{
                              style: {
                                color: `${darkMode ? "#ffffff" : "black"}`,
                              },
                            }}
                            inputProps={{
                              style: {
                                color: `${darkMode ? "#ffffff" : "black"}`,
                              },
                            }}
                            value={supplier}
                            variant="standard"
                            sx={{
                              width: 500,
                              maxWidth: "100%",
                            }}
                          >
                            {data.map((option) => (
                              <MenuItem
                                value={option.supplier}
                                key={option._id}
                              >
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
                              style: {
                                color: `${darkMode ? "#ffffff" : "black"}`,
                              },
                            }}
                            inputProps={{
                              style: {
                                color: `${darkMode ? "#ffffff" : "black"}`,
                              },
                            }}
                            value={supplier}
                            variant="standard"
                            sx={{
                              width: 500,
                              maxWidth: "100%",
                            }}
                          >
                            {data.map((option) => (
                              <MenuItem
                                value={option.supplier}
                                key={option._id}
                              >
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
                            eventCallback={(event) =>
                              setUmo(event.target.value)
                            }
                            darkMode={darkMode}
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <TextFieldStyled
                            label="MOQ"
                            value={moq}
                            width="500"
                            eventCallback={(event) =>
                              setMoq(event.target.value)
                            }
                            darkMode={darkMode}
                            variant="standard"
                          />
                        </Grid>
                        <Grid item lg={12}>
                          <Button onClick={() => setShowForm(false)}>
                            Discard
                          </Button>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </ContainerStyled>
              </PaperStyled>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={false}
                sm={false}
                md={12}
                lg={12}
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
                {/* <YourCard /> */}

                <Typography
                  variant="h3"
                  sx={{
                    textAlign: "center",
                    opacity: "88%",
                    textDecoration: "underline",
                    color: `${darkMode ? "#ffffff" : "#181818"}`,
                  }}
                >
                  <Typography variant="h2">Item Master</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ minHeight: "40vh" }}>
                <PaperStyled
                  elevation={0}
                  sx={{
                    height: "100%",
                  }}
                >
                  {/* Side GRid */}
                  <ContainerStyled sx={{ py: 2 }}>
                    <Box>
                      <Typography
                        variant="h2"
                        sx={{ lineHeight: "1em" }}
                        align="right"
                      >
                        Item Details
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} light variant="left" />
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {/* <Stack direction="column" spacing={0}>
                        {supplierData ? (
                          <>
                            <Typography align="right">
                              <b> Supplier Name:</b> {supplierData.supplierName}
                            </Typography>
                            <Typography align="right">
                              <b>Email:</b> {supplierData.email}
                            </Typography>
                            <Typography align="right">
                              <b>Phone:</b> {supplierData.phoneNo}
                            </Typography>
                            <Typography align="right">
                              <b>Pan:</b> {supplierData.pan}
                            </Typography>
                            <Typography align="right">
                              <b>Type Of Branch:</b>{" "}
                              {supplierData.typeOfBranches}
                            </Typography>
                          </>
                        ) : (
                          <Typography align="right">
                            Select a Supplier
                          </Typography>
                        )}
                      </Stack> */}
                    </Box>
                    <Divider sx={{ my: 1 }} light variant="left" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        my: 2,
                      }}
                    >
                      <Stack direction="row" spacing={3}>
                        <Button>DISCARD</Button>
                        <Button>Create</Button>
                      </Stack>
                    </Box>
                  </ContainerStyled>
                </PaperStyled>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
