import {
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext, useRef, useState } from "react";

import { Box } from "@mui/system";
import { Clear } from "@mui/icons-material";
import ContainerStyled from "components/styled/ContainerStyled";
import { NavLink } from "react-router-dom";
import PaperStyled from "components/styled/PaperStyled";
import SendIcon from "@mui/icons-material/Send";
import TextFieldStyled from "components/styled/TextFieldStyled";
import { UserContext } from "context/UserContext";
import { createNewSupplier } from "api/apis";
import { useSnackbar } from "notistack";

export default function Supplier() {
  const { darkMode } = useContext(UserContext);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const theme = useTheme();
  const [supplierName, setSupplierName] = useState("");
  const supplierNameRef = useRef(null);
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [branchName, setBranchName] = useState("");
  const [cin, setCin] = useState("");
  const [gst, setGst] = useState("");
  const [pan, setPan] = useState("");
  const [tan, setTan] = useState("");
  const [cinDoc, setCinDoc] = useState(null);
  const [gstDoc, setGstDoc] = useState(null);
  const [panDoc, setPanDoc] = useState(null);
  const [tanDoc, setTanDoc] = useState(null);
  const [bankName, setBankName] = useState("");
  const [bankifsc, setBankifsc] = useState("");
  const [address, setAddress] = useState("");
  const [typeOfBranches, setTypeOfBranches] = useState("multiple");
  const [bankDoc, setBankDoc] = useState(null);
  const [accountNumber, setAccountNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  const [attached, setAttached] = useState(parseInt(0));

  const send = () => {
    if (supplierName.length < 3) {
      return enqueueSnackbar(
        "Supplier name must be at least 3 characters long.",
        {
          variant: "error",
        }
      );
    } else if (email.indexOf("@") === -1) {
      return enqueueSnackbar("Please enter valid Email.", {
        variant: "error",
      });
    } else if (phone.length < 8) {
      return enqueueSnackbar("Phone must be minimum 8 digits.", {
        variant: "error",
      });
    } else if (cin.length < 14) {
      return enqueueSnackbar(
        "CIN number must be at least 15 characters long.",
        {
          variant: "error",
        }
      );
    } else if (pan.length < 9) {
      return enqueueSnackbar(
        "PAN number must be at least 10 characters long.",
        {
          variant: "error",
        }
      );
    } else if (tan.length < 9) {
      return enqueueSnackbar(
        "TAN number must be at least 10 characters long.",
        {
          variant: "error",
        }
      );
    } else if (bankName === "") {
      return enqueueSnackbar("Please enter valid Bank Name.", {
        variant: "error",
      });
    } else if (accountNumber.length < 5) {
      return enqueueSnackbar("Please enter valid Account Number.", {
        variant: "error",
      });
    } else if (bankifsc.length < 6) {
      return enqueueSnackbar("Please enter valid IFSC Code.", {
        variant: "error",
      });
    } else if (typeOfBranches === "single") {
      if (!branchName || !address || !gst) {
        return enqueueSnackbar(
          "Please Fill Single Branch Details if Branches is set to Single.",
          {
            variant: "error",
          }
        );
      } else if (gst.length < 14) {
        return enqueueSnackbar("GST must be at least 15 characters long.", {
          variant: "error",
        });
      } else if (address.length < 10) {
        return enqueueSnackbar("Please enter valid Address.", {
          variant: "error",
        });
      } else if (branchName.length < 5) {
        return enqueueSnackbar("Please enter valid Branch Name.", {
          variant: "error",
        });
      }
    }
    if (
      !cin ||
      !pan ||
      !tan ||
      !phone ||
      !tan ||
      !supplierName ||
      !email ||
      !bankifsc ||
      !accountNumber ||
      !bankName ||
      !cinDoc ||
      !panDoc ||
      !tanDoc ||
      !bankDoc ||
      !typeOfBranches
    ) {
      return enqueueSnackbar("Please fill all fields.", {
        variant: "error",
      });
    }

    setLoading(true);
    const data = new FormData();
    data.append("supplierName", supplierName);
    data.append("email", email);
    data.append("phoneNo", phone);
    data.append("cin", cin);
    data.append("pan", pan);
    data.append("tan", tan);
    data.append("bankName", bankName);
    data.append("accountNumber", parseInt(accountNumber));
    data.append("bankifsc", bankifsc);
    data.append("typeOfBranches", typeOfBranches);
    //single branch
    data.append("gst", gst);
    data.append("branchName", branchName);
    data.append("address", address);

    const record = [cinDoc, gstDoc, panDoc, tanDoc, bankDoc];
    record.forEach((rec) => {
      data.append("file", rec);
    });
    createNewSupplier(data)
      .then((res) => {
        if (res !== undefined && res.data.status === true) {
          enqueueSnackbar(res.data.message, { variant: "success" });
          setLoading(false);
          reset();
        } else if (res !== undefined && res.data.status === false) {
          enqueueSnackbar(res.data.message, { variant: "error" });
          setLoading(false);
        }
      })
      .catch((err) => {
        enqueueSnackbar(
          "Something Went Wrong! Please Check All Fields Carefully",
          { variant: "error" }
        );
        setLoading(false);
      });
  };

  const reset = () => {
    setSupplierName("");
    setPhone(0);
    setEmail("");
    setCin("");
    setGst("");
    setPan("");
    setTan("");
    setCinDoc(null);
    setGstDoc(null);
    setPanDoc(null);
    setTanDoc(null);
    setBankDoc(null);
    setBankName("");
    setBankifsc("");
    setAddress("");
    setTypeOfBranches("");
    setAccountNumber(0);
    setAttached(0);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
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
                      <Box sx={{ my: 2 }}>
                        <Typography variant="subtitle1">
                          All fields are mandatory.
                        </Typography>
                      </Box>
                      <TextFieldStyled
                        onChange={(e) => setSupplierName(e.target.value)}
                        label="Supplier Name"
                        value={supplierName}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextFieldStyled
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        type="email"
                        value={email}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextFieldStyled
                        onChange={(e) => setPhone(e.target.value)}
                        label="Phone"
                        type="number"
                        value={phone}
                      />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <TextFieldStyled
                        onChange={(e) => setCin(e.target.value)}
                        label="CIN"
                        value={cin}
                      />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <TextFieldStyled
                        onChange={(e) => setPan(e.target.value)}
                        label="PAN"
                        value={pan}
                      />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <TextFieldStyled
                        onChange={(e) => setTan(e.target.value)}
                        label="TAN"
                        value={tan}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextFieldStyled
                        onChange={(e) => setBankName(e.target.value)}
                        label="Bank Name"
                        value={bankName}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextFieldStyled
                        onChange={(e) => setAccountNumber(e.target.value)}
                        label="Account Number"
                        type="number"
                        value={accountNumber}
                      />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                      <TextFieldStyled
                        onChange={(e) => setBankifsc(e.target.value)}
                        label="Bank IFSC"
                        value={bankifsc}
                      />
                    </Grid>

                    <Grid item xs={6} lg={6}>
                      <label htmlFor="cin">
                        <Stack direction="row" spacing={1}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              alignSelf: "center",
                              pr: "1em",
                            }}
                          >
                            CIN
                          </Typography>
                          <Button variant="contained" component="span">
                            Upload
                          </Button>
                        </Stack>
                        <Input
                          sx={{ display: "none" }}
                          accept="pdf/*"
                          onChange={(event) => {
                            if (event.target.files) {
                              setCinDoc(event.target.files[0]);
                              setAttached(attached + 1);
                            }
                          }}
                          id="cin"
                          type="file"
                        />
                      </label>
                      {cinDoc !== null && cinDoc !== undefined && (
                        <Stack direction="row" spacing={2}>
                          <Typography
                            sx={{ alignSelf: "center" }}
                            variant="subtitle2"
                          >
                            <b>Attached:</b> {cinDoc.name}
                          </Typography>
                          <IconButton>
                            <Clear
                              onClick={() => {
                                setCinDoc(null);
                                setAttached(attached - 1);
                              }}
                              sx={{
                                color: `${darkMode} ? "#FAFAFA" : ${theme.palette.custom.primary.logoBlueFirstW}`,
                              }}
                            />
                          </IconButton>
                        </Stack>
                      )}
                    </Grid>
                    {/* //pan button */}
                    <Grid item xs={12} lg={6}>
                      <label htmlFor="pan">
                        <Stack direction="row" spacing={1}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              alignSelf: "center",
                              pr: "1em",
                            }}
                          >
                            PAN
                          </Typography>
                          <Button variant="contained" component="span">
                            Upload
                          </Button>
                        </Stack>
                        <Input
                          sx={{ display: "none" }}
                          accept="pdf/*"
                          onChange={(event) => {
                            if (event.target.files) {
                              setPanDoc(event.target.files[0]);
                              setAttached(attached + 1);
                            }
                          }}
                          id="pan"
                          type="file"
                        />
                      </label>
                      {panDoc !== null && panDoc !== undefined && (
                        <Stack direction="row" spacing={2}>
                          <Typography
                            sx={{ alignSelf: "center" }}
                            variant="subtitle2"
                          >
                            <b>Attached:</b> {panDoc.name}
                          </Typography>
                          <IconButton>
                            <Clear
                              onClick={() => {
                                setPanDoc(null);
                                setAttached(attached - 1);
                              }}
                              sx={{
                                color: `${darkMode} ? "#FAFAFA" : ${theme.palette.custom.primary.logoBlueFirstW}`,
                              }}
                            />
                          </IconButton>
                        </Stack>
                      )}
                    </Grid>
                    {/* //tan button */}
                    <Grid item xs={12} lg={6}>
                      <label htmlFor="tan">
                        <Stack direction="row" spacing={1}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              alignSelf: "center",
                              pr: "1em",
                            }}
                          >
                            TAN
                          </Typography>
                          <Button variant="contained" component="span">
                            Upload
                          </Button>
                        </Stack>
                        <Input
                          sx={{ display: "none" }}
                          accept="pdf/*"
                          onChange={(event) => {
                            if (event.target.files) {
                              setTanDoc(event.target.files[0]);
                              setAttached(attached + 1);
                            }
                          }}
                          id="tan"
                          type="file"
                        />
                      </label>
                      {tanDoc !== null && tanDoc !== undefined && (
                        <Stack direction="row" spacing={2}>
                          <Typography
                            sx={{ alignSelf: "center" }}
                            variant="subtitle1"
                          >
                            <b>Attached:</b> {tanDoc.name}
                          </Typography>
                          <IconButton>
                            <Clear
                              onClick={() => {
                                setTanDoc(null);
                                setAttached(attached - 1);
                              }}
                              sx={{
                                color: `${darkMode} ? "#FAFAFA" : ${theme.palette.custom.primary.logoBlueFirstW}`,
                              }}
                            />
                          </IconButton>
                        </Stack>
                      )}
                    </Grid>
                    {/* bank button */}
                    <Grid item xs={12} lg={6}>
                      <label htmlFor="bank">
                        <Stack direction="row" spacing={1}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              alignSelf: "center",
                              pr: "1em",
                            }}
                          >
                            Bank Doc
                          </Typography>
                          <Button variant="contained" component="span">
                            Upload
                          </Button>
                        </Stack>
                        <Input
                          sx={{ display: "none" }}
                          accept="pdf/*"
                          onChange={(event) => {
                            if (event.target.files) {
                              setBankDoc(event.target.files[0]);
                              setAttached(attached + 1);
                            }
                          }}
                          id="bank"
                          type="file"
                        />
                      </label>
                      {bankDoc !== null && bankDoc !== undefined && (
                        <Stack direction="row" spacing={2}>
                          <Typography
                            sx={{ alignSelf: "center" }}
                            variant="subtitle2"
                          >
                            <b>Attached:</b> {bankDoc.name}
                          </Typography>
                          <IconButton>
                            <Clear
                              onClick={() => {
                                setBankDoc(null);
                                setAttached(attached - 1);
                              }}
                              sx={{
                                color: `${darkMode} ? "#FAFAFA" : ${theme.palette.custom.primary.logoBlueFirstW}`,
                              }}
                            />
                          </IconButton>
                        </Stack>
                      )}
                    </Grid>
                    {/* //branches text field */}
                    <Grid item xs={12} lg={12}>
                      <FormLabel component="legend">Branches</FormLabel>
                      <RadioGroup
                        row
                        aria-label="gender"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="single"
                          checked={typeOfBranches === "single"}
                          onChange={(event) =>
                            setTypeOfBranches(event.target.value)
                          }
                          control={<Radio />}
                          label="Single"
                        />
                        <FormControlLabel
                          value="multiple"
                          onChange={(event) => {
                            setTypeOfBranches(event.target.value);
                            setGst("");
                            setBranchName("");
                            setAddress("");
                            setGstDoc(null);
                          }}
                          control={<Radio />}
                          checked={typeOfBranches === "multiple"}
                          label="Multiple"
                        />
                      </RadioGroup>
                    </Grid>

                    {/* // file uplode buttons  */}

                    {/* // cin button */}
                    <Grid container sx={{ padding: "20px" }} spacing={3}>
                      {typeOfBranches === "single" ? (
                        <>
                          <Grid item xs={12} lg={9}>
                            <TextFieldStyled
                              onChange={(e) => setGst(e.target.value)}
                              value={gst}
                              label="GST"
                            />
                          </Grid>

                          <Grid item xs={12} lg={9}>
                            <TextFieldStyled
                              label="Branch Name"
                              value={branchName}
                              onChange={(e) => setBranchName(e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={12} lg={12}>
                            <TextFieldStyled
                              multiline
                              maxRows={3}
                              label="Address"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <label htmlFor="gst">
                              <Typography
                                variant="subtitle1"
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
                                onChange={(event) => {
                                  setGstDoc(event.target.files[0]);
                                  setAttached(attached + 1);
                                }}
                                id="gst"
                                type="file"
                              />
                            </label>
                            {gstDoc !== null && gstDoc !== undefined && (
                              <Stack direction="row" spacing={2}>
                                <Typography
                                  sx={{ alignSelf: "center" }}
                                  variant="subtitle2"
                                >
                                  <b>Attached:</b> {gstDoc.name}
                                </Typography>
                                <IconButton>
                                  <Clear
                                    onClick={() => {
                                      setGstDoc(null);
                                      setAttached(attached - 1);
                                    }}
                                    sx={{
                                      color: `${darkMode} ? "#FAFAFA" : ${theme.palette.custom.primary.logoBlueFirstW}`,
                                    }}
                                  />
                                </IconButton>
                              </Stack>
                            )}
                          </Grid>
                        </>
                      ) : (
                        <></>
                      )}
                    </Grid>

                    <Grid item lg={12} alignContent="center">
                      {loading ? (
                        <CircularProgress />
                      ) : (
                        <Button
                          onClick={send}
                          variant="contained"
                          endIcon={<SendIcon />}
                        >
                          Submit
                        </Button>
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
                <Typography
                  variant="h3"
                  sx={{
                    textAlign: "center",
                    opacity: "88%",
                    textDecoration: "underline",
                    color: `${darkMode ? "#ffffff" : "#181818"}`,
                  }}
                >
                  <Typography variant="h2">Supplier Master</Typography>
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
                        Supplier Details
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} variant="left" />
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Stack direction="column" spacing={0}>
                        <Typography align="right">
                          <b> Supplier Name:</b> {supplierName}
                        </Typography>
                        <Typography align="right">
                          <b>Email:</b> {email}
                        </Typography>
                        <Typography align="right">
                          <b>Phone:</b> {phone}
                        </Typography>
                        <Typography align="right">
                          <b>Cin:</b> {cin}
                        </Typography>
                        <Typography align="right">
                          <b>Pan:</b> {pan}
                        </Typography>
                        <Typography align="right">
                          <b>Tan:</b> {tan}
                        </Typography>
                        <Typography align="right">
                          <b>Bank Name:</b> {bankName}
                        </Typography>
                        <Typography align="right">
                          <b>Account Number:</b> {accountNumber}
                        </Typography>
                        <Typography align="right">
                          <b>Bank IFSC:</b> {bankifsc}
                        </Typography>
                        <Typography align="right">
                          <b>Type Of Branch:</b> {typeOfBranches}
                        </Typography>
                        <Typography align="right">
                          <b>Documents Attached</b> {attached}
                        </Typography>
                      </Stack>
                    </Box>
                    <Divider sx={{ my: 1 }} variant="left" />
                    {typeOfBranches === "Single" && (
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Stack>
                          {gst !== "" && (
                            <Typography align="right">
                              <b>GST No.</b> {gst}
                            </Typography>
                          )}

                          {branchName !== "" && (
                            <Typography align="right">
                              <b>Branch Name</b> {branchName}
                            </Typography>
                          )}
                          {address !== "" && (
                            <Typography align="right">
                              <b>Address</b> {address}
                            </Typography>
                          )}
                        </Stack>
                      </Box>
                    )}

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
