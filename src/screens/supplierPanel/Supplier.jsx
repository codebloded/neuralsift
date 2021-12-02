import { Add, CenterFocusStrongRounded, Clear } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Container,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Input,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  getAllSuppliers,
  getSupplierDetails,
  handleCreateNewBranch,
} from "api/apis";

import Axios from "axios";
import { Box } from "@mui/system";
import ContainerStyled from "components/styled/ContainerStyled";
import PaperStyled from "components/styled/PaperStyled";
import TextFieldStyled from "components/styled/TextFieldStyled";
import { UserContext } from "context/UserContext";
import { useSnackbar } from "notistack";

export default function Supplier() {
  const { darkMode } = useContext(UserContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const theme = useTheme();
  const [supplierName, setSupplier] = useState("");
  const [states, setStates] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [brancheName, setBrancheName] = useState();
  const [cin, setCin] = useState();
  const [gst, setGst] = useState();
  const [pan, setPan] = useState();
  const [tan, setTan] = useState();
  const [cinDoc, setCinDoc] = useState();
  const [gstDoc, setGstDoc] = useState();
  const [panDoc, setPanDoc] = useState();
  const [tanDoc, setTanDoc] = useState();
  const [bankName, setBankName] = useState();
  const [bankifsc, setBankifsc] = useState();
  const [address, setAddress] = useState();
  const [single, setSingle] = useState();
  const [bankDoc, setBankDoc] = useState();
  const [accountNumber, setAccountNumber] = useState();

  const send = () => {
    console.log({
      cin,
      gst,
      pan,
      tan,
      phone,
      tan,
      supplierName,
      email,
      brancheName,
      bankifsc,
      accountNumber,
      bankName,
      address,
      cinDoc,
      panDoc,
      tanDoc,
      bankDoc,
      gstDoc,
      single,
    });

    const data = new FormData();
    data.append("supplierName", supplierName);
    data.append("email", email);
    data.append("phoneNo", phone);
    data.append("cin", cin);
    data.append("pan", pan);
    data.append("tan", tan);
    data.append("bankname", bankName);
    data.append("accountNumber", accountNumber);
    data.append("bankifsc", bankifsc);
    data.append("typeOfBranches", single);
    //single branch
    data.append("gst", gst);
    data.append("branchName", brancheName);
    data.append("address", address);

    const record = [cinDoc, gstDoc, panDoc, tanDoc, bankDoc];
    record.forEach((rec) => {
      console.log(rec);
      data.append("file", rec);
    });
    Axios.post("http://localhost:5000/new/supplier", data, {
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
                    <Grid item xs={9}>
                      <TextFieldStyled
                        onChange={(e) => setSupplier(e.target.value)}
                        label="Supplier Name"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextFieldStyled
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        type="email"
                      />
                    </Grid>
                    <Grid item xs={6} lg={6}>
                      <TextFieldStyled
                        onChange={(e) => setPhone(e.target.value)}
                        label="Phone"
                        type="number"
                      />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <TextFieldStyled
                        onChange={(e) => setCin(e.target.value)}
                        label="CIN"
                      />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <TextFieldStyled
                        onChange={(e) => setPan(e.target.value)}
                        type="number"
                        label="PAN"
                      />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <TextFieldStyled
                        onChange={(e) => setTan(e.target.value)}
                        type="number"
                        label="TAN"
                      />
                    </Grid>
                    <Grid item xs={12} lg={9}>
                      <TextFieldStyled
                        onChange={(e) => setBankName(e.target.value)}
                        label="Bank Name"
                      />
                    </Grid>
                    <Grid item xs={12} lg={9}>
                      <TextFieldStyled
                        onChange={(e) => setAccountNumber(e.target.value)}
                        type="number"
                        label="Account Number"
                      />
                    </Grid>
                    <Grid item xs={12} lg={9}>
                      <TextFieldStyled
                        onChange={(e) => setBankifsc(e.target.value)}
                        label="Bank IFSC"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <label htmlFor="cin">
                        <Typography
                          variant="h7"
                          sx={{
                            paddingRight: "15px",
                            color: `${darkMode ? "#ffffff" : "black"}`,
                          }}
                        >
                          Cin
                        </Typography>
                        <Button variant="contained" component="span">
                          Upload
                        </Button>
                        <Input
                          sx={{ display: "none" }}
                          accept="pdf/*"
                          onChange={(event) => setCinDoc(event.target.files[0])}
                          id="cin"
                          type="file"
                        />
                      </label>
                    </Grid>
                    {/* //pan button */}
                    <Grid item xs={6}>
                      <label htmlFor="pan">
                        <Typography
                          variant="h7"
                          sx={{
                            paddingRight: "15px",
                            color: `${darkMode ? "#ffffff" : "black"}`,
                          }}
                        >
                          PAN
                        </Typography>
                        <Button variant="contained" component="span">
                          Upload
                        </Button>
                        <Input
                          sx={{ display: "none" }}
                          accept="pdf/*"
                          onChange={(event) => setPanDoc(event.target.files[0])}
                          id="pan"
                          type="file"
                        />
                      </label>
                    </Grid>
                    {/* //tan button */}
                    <Grid item xs={6}>
                      <label htmlFor="tan">
                        <Typography
                          variant="h7"
                          sx={{
                            paddingRight: "15px",
                            color: `${darkMode ? "#ffffff" : "black"}`,
                          }}
                        >
                          Tan
                        </Typography>
                        <Button variant="contained" component="span">
                          Upload
                        </Button>
                        <Input
                          sx={{ display: "none" }}
                          accept="pdf/*"
                          onChange={(event) => setTanDoc(event.target.files[0])}
                          id="tan"
                          type="file"
                        />
                      </label>
                    </Grid>
                    {/* bank button */}
                    <Grid item xs={6}>
                      <label htmlFor="bank">
                        <Typography
                          variant="h7"
                          sx={{
                            paddingRight: "15px",
                            color: `${darkMode ? "#ffffff" : "black"}`,
                          }}
                        >
                          Bank Details
                        </Typography>
                        <Button variant="contained" component="span">
                          Upload
                        </Button>
                        <Input
                          sx={{ display: "none" }}
                          accept="pdf/*"
                          onChange={(event) =>
                            setBankDoc(event.target.files[0])
                          }
                          id="bank"
                          type="file"
                        />
                      </label>
                    </Grid>
                    {/* //branches text field */}
                    <Grid item xs={12} lg={12}>
                      <FormLabel
                        sx={{ color: `${darkMode ? "#ffffff" : "black"}` }}
                        component="legend"
                      >
                        Branches
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-label="gender"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="Single"
                          onChange={(event) => setSingle(event.target.value)}
                          sx={{ color: `${darkMode ? "#ffffff" : "black"}` }}
                          control={<Radio />}
                          label="Single"
                        />
                        <FormControlLabel
                          value="Multiple"
                          onChange={(event) => setSingle(event.target.value)}
                          sx={{ color: `${darkMode ? "#ffffff" : "black"}` }}
                          control={<Radio />}
                          label="Multiple"
                        />
                      </RadioGroup>
                    </Grid>

                    {/* // file uplode buttons  */}

                    {/* // cin button */}
                    <Grid container sx={{ padding: "20px" }} spacing={3}>
                      {single === "Single" ? (
                        <>
                          <Grid item xs={12} lg={9}>
                            <TextFieldStyled
                              onChange={(e) => setGst(e.target.value)}
                              value={gst}
                              label="GST"
                              type="number"
                            />
                          </Grid>

                          <Grid item xs={12} lg={9}>
                            <TextFieldStyled
                              label="Branch Name"
                              value={brancheName}
                              onChange={(e) => setBrancheName(e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={12} lg={12}>
                            <TextFieldStyled
                              label="Addrress"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <label htmlFor="gst">
                              <Typography
                                variant="h7"
                                sx={{
                                  paddingRight: "15px",
                                  color: `${darkMode ? "#ffffff" : "black"}`,
                                }}
                              >
                                GST Document
                              </Typography>
                              <Button variant="contained" component="span">
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
                          </Grid>
                        </>
                      ) : (
                        <></>
                      )}
                    </Grid>

                    <Grid item lg={12} alignContent="center">
                      <Button
                        onClick={send}
                        variant="contained"
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
                      {/* <Stack direction="column" spacing={0}>
                        {supplierData ? (
                          <>
                            <Typography align="right">
                              <b> Supplier Name:</b> {}
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
                    ></Box>
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
