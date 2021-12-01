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
import PaperStyled from "components/styled/PaperStyled";
// import { ToastContainer,  } from "react-toastify";

import Axios from "axios";
import { getAllSuppliers, getSupplierDetails } from "api/apis";
import { Add, CenterFocusStrongRounded, Clear } from "@mui/icons-material";
import { Box } from "@mui/system";
import { UserContext } from "context/UserContext";
import toast from "components/styled/ToastConfig";

import React, { useContext, useEffect, useState } from "react";
import TextFieldStyled from "components/styled/TextFieldStyled";
import ContainerStyled from "components/styled/ContainerStyled";

export default function Branches() {
  const theme = useTheme();
  const { darkMode, baseUrl } = useContext(UserContext);
  const [gst, setGst] = useState("");
  const [gstDoc, setGstDoc] = useState(null);
  const [data, setData] = useState([]);
  const [branchName, setBranchName] = useState("");
  const [address, setAddress] = useState("");
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const [supplier, setSupplier] = useState("");
  console.log(gstDoc);
  const [showRow, setShowRow] = useState(false);
  const [clear, setClear] = useState(false);

  const [supplierData, setSupplierData] = useState(null);

  const [supplierID, setSupplierID] = useState(null);
  console.log(supplierID);
  useEffect(() => {
    getAllSuppliers().then((res) => {
      if (res) {
        setData(res.data.data);
        setFilteredSuppliers(res.data.data);
      }
    });
  }, []);

  const handleSubmit = () => {
    if (
      !gstDoc ||
      !gst ||
      !address ||
      !branchName ||
      !supplierID ||
      supplierID !== "Multiple Branch"
    )
      return;
  };
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
                      <Button
                        onClick={() => {
                          toast.error("You do not have permission to do that");
                        }}
                      >
                        clkick
                      </Button>
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
                      <Box sx={{ mt: 2 }}>
                        {supplierData !== null &&
                        supplierData.typeOfBranches === "Single Branch" ? (
                          <Typography variant="subtitle1" color="error">
                            You are not eligible for creating a branch. Since
                            you have chosen your type of branch as Single during
                            creation.
                          </Typography>
                        ) : (
                          <Typography variant="subtitle1" color="green">
                            You are eligible , Please proceed by clicking on{" "}
                            <Add sx={{ color: "white" }} /> {"  "}
                            to create a new branch
                          </Typography>
                        )}
                      </Box>
                    </Grid>

                    <Grid item columnSpacing={3} xs={12} lg={12}>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-around" }}
                      >
                        {showRow ? (
                          <Paper
                            sx={{
                              background: "transparent",
                              borderRadius: "10px",
                              border: "1px solid rgba(255, 255, 255, 0.3)",
                              py: 3,
                              px: 3,
                              my: 2,
                            }}
                          >
                            <Stack
                              spacing={3}
                              direction="column"
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}
                            >
                              <Typography align="center" variant="h4">
                                NEW BRANCH FORM
                              </Typography>
                              <TextFieldStyled
                                label="Branch Name"
                                sx={{ margin: "1em 1em" }}
                              />
                              <TextFieldStyled label="Address" />
                              <TextFieldStyled label="GST" placeholder="Code" />
                              <Box>
                                {gstDoc === null && (
                                  <label htmlFor="gst">
                                    <Typography variant="subtitle1">
                                      GST Document Attachment
                                    </Typography>
                                    <Button
                                      variant="contained"
                                      component="span"
                                    >
                                      Upload
                                    </Button>

                                    <Input
                                      sx={{ display: "none" }}
                                      accept="pdf/*"
                                      onChange={(event) =>
                                        setGstDoc(event.target.files[0])
                                      }
                                      id="gst"
                                      type="file"
                                    />
                                  </label>
                                )}
                                {gstDoc !== null ? (
                                  <Stack direction="row" spacing={2}>
                                    <Typography
                                      sx={{ alignSelf: "center" }}
                                      variant="subtitle1"
                                    >
                                      <b>Attached:</b> {gstDoc.name}
                                    </Typography>
                                    <IconButton>
                                      <Clear
                                        onClick={() => {
                                          setGstDoc(null);
                                        }}
                                        sx={{
                                          color: `${darkMode} ? "#FAFAFA" : ${theme.palette.custom.primary.logoBlueFirstW}`,
                                        }}
                                      />
                                    </IconButton>
                                  </Stack>
                                ) : null}
                                <Button onClick={handleSubmit}>Submit</Button>
                              </Box>
                            </Stack>
                          </Paper>
                        ) : (
                          <IconButton
                            onClick={() => setShowRow(!showRow)}
                            sx={{
                              borderRadius: "15%",
                              backgroundColor: "transparent",
                              border: "1px solid rgba(255,255,255,0.5)",
                              p: 2,
                            }}
                          >
                            <Add />
                          </IconButton>
                        )}
                      </Box>
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
                  <Typography variant="h2">Branch Master</Typography>
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
                        Branches Details
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} light variant="left" />
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Stack direction="column" spacing={0}>
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
                      </Stack>
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
