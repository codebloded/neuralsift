import {
  Button,
  Container,
  Grid,
  Input,
  Stack,
  Typography,
} from "@mui/material";

import { Add } from "@mui/icons-material";
import { Box } from "@mui/system";
import React from "react";
import TextFieldStyled from "components/styled/TextFieldStyled";
import { UserContext } from "context/UserContext";

export default function BranchesMaster() {
  const { darkMode } = React.useContext(UserContext);
  const [gst, setGst] = React.useState("");
  return (
    <Container
      sx={{
        padding: "40px",
        // border: "1px solid red",
        backgroundColor: `${darkMode ? "#161B22;" : "#f0f7ff"}`,
        borderRadius: "15px",
        borderLeft: "7px solid #2f8deb",
      }}
    >
      <Grid container spacing={3}>
        <Grid item columnSpacing={3} xs={12} lg={12}>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography
              sx={{ display: "flex", alignSelf: "center", marginRight: "10px" }}
            >
              1
            </Typography>
            <Stack spacing={3} direction="row">
              <TextFieldStyled
                // id="outlined-required"
                label="Branch Name"
                sx={{ margin: "5px" }}
                placeholder="Code"
                darkMode={darkMode}
              />
              <TextFieldStyled
                // id="outlined-required"
                label="Address"
                placeholder="Code"
                darkMode={darkMode}
              />
              <TextFieldStyled
                // id="outlined-required"
                label="GST"
                placeholder="Code"
                darkMode={darkMode}
              />
              <Grid item xs={6}>
                <label htmlFor="pan">
                  <Typography
                    variant="h7"
                    sx={{
                      paddingRight: "15px",
                      color: `${darkMode ? "#ffffff" : "black"}`,
                    }}
                  >
                    GST doc
                  </Typography>
                  <Button variant="contained">Upload</Button>
                  <Input
                    sx={{ display: "none" }}
                    accept="pdf/*"
                    onChange={(event) => setGst(event.target.files[0])}
                    id="pan"
                    type="file"
                  />
                </label>
              </Grid>
            </Stack>
          </Box>
          <Grid sx={{ pt: "10px", ml: "15.4px" }} item xs={6} sm={6} lg={6}>
            <Button
              sx={{ color: "white" }}
              startIcon={<Add />}
              color="secondary"
            >
              Add Branches
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
