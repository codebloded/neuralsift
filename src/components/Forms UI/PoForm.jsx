import {
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Axios from "axios";
import { DatePicker } from "@mui/lab";
import FormTable from "../FormTable";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { UserContext } from "../../context/UserContext";
import React from "react";
import SendIcon from "@mui/icons-material/Send";


export default function PoForm() {
  const { darkMode } = React.useContext(UserContext);
  const [type, setType] = React.useState(null);
  const [timePeriod, setTimePeriod] = React.useState("");
  const [supplier, setSupplier] = React.useState("");
  const [creditrPeriod, setCreditPeriod] = React.useState("");
  const [billingTenure, setBilling] = React.useState("");
  const [item, setItem] = React.useState("");
  const [orderQuantity, setOrderQuantity] = React.useState("");
  const [validityStart, setStart] = React.useState(new Date());
  const [validityEnd, setEnd] = React.useState(new Date());
  const handlePoChange = (event) => {
    setType(event.target.value);
  };
  const handleSupplierChange = (event) => {
    setSupplier(event.target.value);
  };
  const handleBillingChange = (event) => {
    setBilling(event.target.value);
  };

  //Newuser90
  const handleTimePeriod = (event) => {
    setTimePeriod(event.target.value);
  };
  const handlePreiodChange = (event) => {
    setCreditPeriod(event.target.value);
  };
  const handleItemChange = (event) => {
    setItem(event.target.value);
  };
  const [data, setData] = React.useState([]);

  // const TextField = styled(TextField)({
  //     '& label.Mui-focused': {
  //         color: 'green',
  //     },
  //     '& .MuiInput-underline:after': {
  //         borderBottomColor: '#2f8deb',
  //     },
  //     '& .MuiInput-underline:before': {
  //         borderBottomColor: `${darkMode ? "white" : "black"}`
  //     },
  //     '& .MuiOutlinedInput-root': {
  //         '& fieldset': {
  //             borderColor: `${darkMode ? "white" : "black"}`,
  //         },
  //         '&:hover fieldset': {
  //             borderColor: 'green',
  //         },
  //         '&.Mui-focused fieldset': {
  //             borderColor: '#2f8deb',
  //         },
  //     },
  // });
  React.useEffect(() => {
    Axios.get("http://localhost:5000/supplier")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const send = () => {
    const formData = new FormData();
    formData.append("type", type);
    formData.append("supplier", supplier);
    formData.append("item", item);
    formData.append("timePeriod", timePeriod);
    formData.append("creditPeriods", creditrPeriod);
    formData.append("billingTenure", billingTenure);
    formData.append("orderQuantity", orderQuantity);
    formData.append("validityStart", validityStart);
    formData.append("validityEnd", validityEnd);

    console.log({
      type,
      supplier,
      item,
      timePeriod,
      creditrPeriod,
      billingTenure,
      orderQuantity,
      validityEnd,
      validityStart,
    });
    Axios.post("http://localhost:5000/po", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container
      sx={{
        padding: "20px",
        mt: "20px",
        // border: "1px solid red",
        backgroundColor: `${darkMode ? "#132f4c" : "#f0f7ff"}`,
        borderRadius: "6px",
        color: `${darkMode ? "white" : "black"}`,
        marginTop: "3.5em",
        width: "100%",
        height: "100%",
        maxWidth: { xs: "340px", sm: "370px", lg: "900px" },
        mr: { xs: "10px", lg: "auto" },
        ml: { xs: "10px", lg: "auto" },

        borderLeft: "7px solid #2f8deb",
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        style={{ textAlign: "center", marginBottom: "15px" }}
      >
        PO FORM
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <TextField
            id="filled-select-currency"
            select
            label="Type of PO"
            InputLabelProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            inputProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            value={type}
            onChange={handlePoChange}
            variant="standard"
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <MenuItem value="service">Service</MenuItem>
            <MenuItem value="assets">Assets</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} lg={12}>
          <TextField
            id="filled-select-currency"
            select
            label="Supplier"
            InputLabelProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            inputProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            value={supplier}
            onChange={handleSupplierChange}
            variant="standard"
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <MenuItem value="mapping">mapping </MenuItem>
            <MenuItem value="mapping">mapping</MenuItem>
            <MenuItem value="mapping">mapping</MenuItem>
            <MenuItem value="mapping">mapping</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} lg={9}>
          {type == "service" ? (
            <TextField
              id="custom-css-outlined-input"
              label="Item"
              InputLabelProps={{
                style: { color: `${darkMode ? "#ffffff" : "black"}` },
              }}
              inputProps={{
                style: { color: `${darkMode ? "#ffffff" : "black"}` },
              }}
              onChange={(event) => setItem(event.target.value)}
              variant="outlined"
              sx={{
                width: 500,
                maxWidth: "100%",
                " & .Mui-disabled .MuiOutlinedInput-notchedOutline": {
                  borderColor: "orange",
                },
              }}
            />
          ) : (
            <TextField
              id="filled-select-currency"
              select
              label="Items"
              InputLabelProps={{
                style: { color: `${darkMode ? "#ffffff" : "black"}` },
              }}
              inputProps={{
                style: { color: `${darkMode ? "#ffffff" : "black"}` },
              }}
              value={item}
              onChange={handleItemChange}
              variant="standard"
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <MenuItem value="rohan">Service</MenuItem>
              <MenuItem value="assets">Assets</MenuItem>
            </TextField>
          )}
        </Grid>

        <Grid item xs={9} lg={12}>
          <TextField
            id="filled-select-currency"
            select
            label="Time Period"
            InputLabelProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            inputProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            value={timePeriod}
            onChange={handleTimePeriod}
            variant="standard"
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <MenuItem value="one time">One Time </MenuItem>
            <MenuItem value="Recuring">Recurring</MenuItem>
          </TextField>
        </Grid>
        {timePeriod == "Recuring" && (
          <Grid item xs={12} lg={12}>
            <TextField
              id="filled-select-currency"
              select
              label="Billing Tenure Frequency"
              InputLabelProps={{
                style: { color: `${darkMode ? "#ffffff" : "black"}` },
              }}
              inputProps={{
                style: { color: `${darkMode ? "#ffffff" : "black"}` },
              }}
              value={billingTenure}
              onChange={handleBillingChange}
              variant="standard"
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <MenuItem value="Annually">Anually</MenuItem>
              <MenuItem value="half yearly">Half Yearly</MenuItem>
              <MenuItem value="Quaterly">Quaterly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
            </TextField>
          </Grid>
        )}
        <Grid item xs={12} lg={6}>
          <TextField
            id="filled-select-currency"
            select
            label="Credit Period"
            InputLabelProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            inputProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            value={creditrPeriod}
            onChange={handlePreiodChange}
            variant="standard"
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <MenuItem value="30 days">30 Days</MenuItem>
            <MenuItem value="90 days">90 Days</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextField
            id="custom-css-outlined-input"
            label="Order Quantity"
            InputLabelProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            inputProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            type="number"
            onChange={(event) => setOrderQuantity(event.target.value)}
            variant="outlined"
            sx={{
              width: 500,
              maxWidth: "100%",
              " & .Mui-disabled .MuiOutlinedInput-notchedOutline": {
                borderColor: "orange",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Validity Start Date"
              value={validityEnd}
              InputProps={{
                style: { color: `${darkMode ? "#ffffff" : "black"}` },
              }}
              onChange={(newValue) => {
                setEnd(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  sx={{
                    svg: { color: `${darkMode ? "white" : "black"}` },
                    input: { color: `${darkMode ? "white" : "black"}` },
                    label: { color: `${darkMode ? "white" : "black"}` },
                  }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} lg={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Validity End Date"
              value={validityStart}
              InputLabelProps={{
                style: { color: `${darkMode ? "#ffffff" : "black"}` },
              }}
              InputProps={{
                style: {
                  color: `${darkMode ? "#ffffff" : "black"}`,
                  borderColor: "red",
                },
              }}
              onChange={(newValue) => {
                setStart(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  sx={{
                    svg: { color: `${darkMode ? "#ffffff" : "black"}` },
                    input: { color: `${darkMode ? "#ffffff" : "black"}` },
                    label: { color: `${darkMode ? "#ffffff" : "black"}` },
                  }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item lg={12} sm={12}>
          <FormTable />
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
