import {
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";

import Axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import TextFieldStyled from "components/styled/TextFieldStyled";
import { UserContext } from "context/UserContext";
import { styled } from "@mui/styles";

export default function SupplierMaster() {
  const { darkMode } = useContext(UserContext);
  const [supplierName, setSupplier] = useState("");
  const [states, setStates] = useState("");
  const [phone, setPhone] = useState("");
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

  const [bankDoc, setBankDoc] = useState();
  const [accountNumber, setAccountNumber] = useState();

  //Radio buttons state
  const [single, setSingle] = useState();

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
      single
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
    Axios.post("http://localhost:5000/supplier", data, {
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
    //
    <Container
      sx={{
        padding: "4em 1em",
        // border: "1px solid red",
        backgroundColor: `${darkMode ? "#161B22;" : "#ffffff"}`,
        borderRadius: "15px",
        borderLeft: "7px solid #2f8deb",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <TextFieldStyled
            // id="outlined-required"

            value={supplierName}
            label="Supplier Name"
            width="500"
            eventCallback={(event) => setSupplier(event.target.value)}
            darkMode={darkMode}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldStyled
            value={email}
            label="Email"
            width="500"
            eventCallback={(event) => setEmail(event.target.value)}
            darkMode={darkMode}
          />
        </Grid>
        <Grid item xs={6}>
          <TextFieldStyled
            value={phone}
            label="Phone No."
            width="500"
            eventCallback={(event) => setPhone(event.target.value)}
            darkMode={darkMode}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextFieldStyled
            label="CIN"
            value={cin}
            eventCallback={(event) => setCin(event.target.value)}
            width="400"
            darkMode={darkMode}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextFieldStyled
            label="PAN"
            value={pan}
            eventCallback={(event) => setPan(event.target.value)}
            width="400"
            darkMode={darkMode}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextFieldStyled
            label="TAN"
            eventCallback={(event) => setTan(event.target.value)}
            value={tan}
            width="400"
            darkMode={darkMode}
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          <TextFieldStyled
            label="Bank Name"
            value={bankName}
            eventCallback={(event) => setBankName(event.target.value)}
            width="400"
            darkMode={darkMode}
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          <TextFieldStyled
            label="Account No."
            value={accountNumber}
            eventCallback={(event) => setAccountNumber(event.target.value)}
            width="400"
            darkMode={darkMode}
          />
        </Grid>

        <Grid item xs={12} lg={9}>
          <TextFieldStyled
            label="Bank IFSC"
            value={bankifsc}
            eventCallback={(event) => setBankifsc(event.target.value)}
            width="400"
            darkMode={darkMode}
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
              onChange={(event) => setBankDoc(event.target.files[0])}
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
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel
              value="Single Branch"
              onChange={(event) => setSingle(event.target.value)}
              sx={{ color: `${darkMode ? "#ffffff" : "black"}` }}
              control={<Radio />}
              label="Single Branch"
            />
            <FormControlLabel
              value="Multiple Branch"
              onChange={(event) => setSingle(event.target.value)}
              sx={{ color: `${darkMode ? "#ffffff" : "black"}` }}
              control={<Radio />}
              label="Multiple Branch"
            />
          </RadioGroup>
        </Grid>

        {/* // file uplode buttons  */}

        {/* // cin button */}
        <Grid container sx={{ padding: "20px" }} spacing={3}>
          {single === "Single Branch" ? (
            <>
              <Grid item xs={12} lg={9}>
                <TextFieldStyled
                  label="GST"
                  value={gst}
                  eventCallback={(event) => setGst(event.target.value)}
                  width="400"
                  darkMode={darkMode}
                />
              </Grid>

              <Grid item xs={12} lg={9}>
                <TextFieldStyled
                  label="Branch Name"
                  value={brancheName}
                  eventCallback={(event) => setBrancheName(event.target.value)}
                  width="400"
                  darkMode={darkMode}
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <TextFieldStyled
                  label="Addrress"
                  value={address}
                  eventCallback={(event) => setAddress(event.target.value)}
                  width="400"
                  darkMode={darkMode}
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
                    onChange={(event) => setGstDoc(event.target.files[0])}
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
