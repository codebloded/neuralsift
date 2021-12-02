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
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PaperStyled from "components/styled/PaperStyled";
// import { ToastContainer,  } from "react-toastify";

import Axios from "axios";
import { getAllSuppliers, getCategory } from "api/apis";
import { Add, CenterFocusStrongRounded, Clear } from "@mui/icons-material";
import { Box } from "@mui/system";
import { UserContext } from "context/UserContext";

import React, { useContext, useEffect, useState } from "react";
import TextFieldStyled from "components/styled/TextFieldStyled";
import ContainerStyled from "components/styled/ContainerStyled";

export default function CategoryMaster() {
  const theme = useTheme();
  const { darkMode, baseUrl } = useContext(UserContext);
  const [showField, setShowField] = useState(false);
  const [categoryData, setCategoryData] = useState(null);
  const [categoryID, setCategoryID] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [data, setData] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  //item master states

  const [category, setCategory] = React.useState("");
  const [subCategory, setSubCatogery] = React.useState("");

  useEffect(() => {
    getAllSuppliers().then((res) => {
      if (res) {
        setData(res.data.data);
        setFilteredCategory(res.data.data);
      }
    });
  }, []);

  const handleCategory = (event) => {
    if (event.target.value === "") {
      setFilteredCategory(data);
    } else {
      const newData = data.filter((supplier) => {
        return supplier.supplierName.includes(event.target.value);
      });
      setFilteredCategory(newData);
    }
    setCategoryID(event.target.value);
  };
  useEffect(() => {
    if (categoryID === null || categoryID === "") return;
    getCategory(categoryID).then((res) => {
      setCategoryData(res.data.data);
    });
  }, [categoryID]);

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
                    <Grid item xs={12} lg={12}>
                      {categoryData === null ? (
                        <Typography variant="h6">No Category Found</Typography>
                      ) : (
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 650 }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">
                                  Fat&nbsp;(g)
                                </TableCell>
                                <TableCell align="right">
                                  Carbs&nbsp;(g)
                                </TableCell>
                                <TableCell align="right">
                                  Protein&nbsp;(g)
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableCell component="th" scope="row">
                                Name
                              </TableCell>
                              <TableCell component="th" scope="row">
                                Name
                              </TableCell>
                              <TableCell component="th" scope="row">
                                Name
                              </TableCell>
                            </TableBody>
                          </Table>
                        </TableContainer>
                      )}
                    </Grid>
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
                    {!showField ? (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            my: 2,
                            justifyContent: "center",
                          }}
                        >
                          <IconButton
                            sx={{
                              borderRadius: "15%",
                              backgroundColor: "transparent",
                              border: "1px solid rgba(255,255,255,0.5)",
                              p: 2,
                            }}
                            onClick={() => setShowField(!showField)}
                          >
                            <Add />
                          </IconButton>
                        </Box>
                        <Typography align="center" variant="subtitle1">
                          Add Category
                        </Typography>
                      </>
                    ) : (
                      <TextFieldStyled
                        label="Category"
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    )}
                    <Divider sx={{ my: 1 }} light variant="left" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        my: 2,
                      }}
                    >
                      {!showDropDown ? (
                        <>
                          <Box
                            sx={{
                              display: "flex",
                              my: 2,
                              justifyContent: "center",
                            }}
                          >
                            <IconButton
                              sx={{
                                borderRadius: "15%",
                                backgroundColor: "transparent",
                                border: "1px solid rgba(255,255,255,0.5)",
                                p: 2,
                              }}
                              onClick={() => setShowDropDown(!showDropDown)}
                            >
                              <Add />
                            </IconButton>
                          </Box>
                          <Typography align="center" variant="subtitle1">
                            Add Sub Category
                          </Typography>
                        </>
                      ) : (
                        <Autocomplete
                          freeSolo
                          fullWidth
                          onChange={(event, value) => {
                            if (value !== null) {
                              setCategory(value.split(",")[1]);
                            }
                          }}
                          options={filteredCategory.map(
                            (option) => option.supplierName + "," + option._id
                          )}
                          renderInput={(params) => (
                            <TextFieldStyled
                              onChange={handleCategory}
                              {...params}
                              label="Category"
                            />
                          )}
                        />
                      )}
                      {showField && showDropDown ? (
                        <Stack direction="row" spacing={3}>
                          <Button onClick={() => setShowField(false)}>
                            DISCARD
                          </Button>
                          <Button>Create</Button>
                        </Stack>
                      ) : null}
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
