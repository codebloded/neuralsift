import { Add, PlusOne } from "@mui/icons-material";
import {
  Button,
  Container,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import ModeContext, { UserContext } from "../../context/UserContext";
import TextFieldStyled from "components/styled/TextFieldStyled";
import TransferUI from "./TransferUI";

export default function UserMaster() {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { darkMode } = React.useContext(UserContext);

  const [temp, setTemp] = useState(false);
  const showCreateRole = () => {
    setTemp(true);
  };
  const hideCreateRole = () => {
    setTemp(false);
  };
  console.log(temp);
  return (
    <Container
      sx={{
        padding: "20px",

        // border: "1px solid red",
        backgroundColor: `${darkMode ? "#161B22" : "#f0f7ff"}`,
        borderRadius: "15px",
        color: `${darkMode ? "white" : "black"}`,
        borderLeft: "7px solid #2f8deb",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} lg={9}>
          <TextFieldStyled
            // id="outlined-required"
            label="Usename"
            value={userName}
            eventCallback={(event) => setUserName(event.target.value)}
            darkMode={darkMode}
          />
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextFieldStyled
            // id="outlined-required"
            label="Name"
            value={name}
            eventCallback={(event) => setName(event.target.value)}
            darkMode={darkMode}
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          <TextFieldStyled
            // id="outlined-required"
            label="Email"
            value={email}
            eventCallback={(event) => setEmail(event.target.value)}
            darkMode={darkMode}
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          <TextField
            id="filled-select-currency"
            select
            label="Role"
            InputLabelProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            inputProps={{
              style: { color: `${darkMode ? "#ffffff" : "black"}` },
            }}
            value={role}
            onChange={(event) => setRole(event.target.value)}
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
        <Grid item xs={12} sx={{ textAlign: "center" }} sm={12}>
          <FormLabel
            sx={{ color: `${darkMode ? "#ffffff" : "black"}` }}
            component="legend"
          >
            OR
          </FormLabel>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Button
            sx={{ color: "white" }}
            onClick={showCreateRole}
            startIcon={<Add />}
          >
            Create New Role
          </Button>
        </Grid>
        {temp && (
          <>
            <Grid item xs={12} sm={12}>
              <TransferUI darkMode={darkMode} />
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Button sx={{ color: "white" }}>Create Role</Button>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Button
                onClick={hideCreateRole}
                sx={{ color: "white" }}
                color="secondary"
              >
                Cancel
              </Button>
            </Grid>
          </>
        )}
        <Grid item xs={12} sx={{ textAlign: "center" }} sm={12}>
          <FormLabel
            sx={{ color: `${darkMode ? "#ffffff" : "black"}` }}
            component="legend"
          >
            OR
          </FormLabel>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormLabel
            sx={{ color: `${darkMode ? "#ffffff" : "black"}` }}
            component="legend"
          >
            Permissions
          </FormLabel>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TransferUI darkMode={darkMode} />
        </Grid>
      </Grid>
    </Container>
  );
}
