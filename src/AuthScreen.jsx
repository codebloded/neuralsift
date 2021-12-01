import { Box, Button, Grid, IconButton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { RiMoonFoggyFill, RiMoonFoggyLine } from "react-icons/ri";

import { AiFillZhihuSquare } from "react-icons/ai";
// import BackgroundImage from "../../assets/video/backgroundImage.jpg";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import ModeContext from "./context/UserContext";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://continuumexcellence.com/">
        www.continuumexcellence.com
      </Link>
    </Typography>
  );
}

export default function AuthScreen() {
  const { isDarkMode, handleDarkMode } = React.useContext(ModeContext);
  const [rememberMe, setRememberMe] = useState(false);
  const theme = useTheme();
  console.log(theme.palette.custom.primary.main);
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={8}
        md={7}
        lg={12}
        elevation={6}
        square
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: isDarkMode
            ? theme.palette.custom.primary.main
            : theme.palette.custom.primary.secondary,
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <AiFillZhihuSquare
              size="3em"
              style={{
                color: isDarkMode
                  ? theme.palette.custom.primary.secondary
                  : theme.palette.custom.primary.main,
              }}
            />
          </div>

          <Typography
            component="h1"
            variant="h2"
            style={{
              color: isDarkMode
                ? theme.palette.custom.primary.secondary
                : theme.palette.custom.primary.main,
            }}
          >
            SIGN IN
          </Typography>
          <Box sx={{ mt: 1 }} style={{ width: "50%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="User Name"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              variant="outlined"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Typography
              variant="subtitle1"
              sx={{
                ml: -1,
                mt: 1,
                color: isDarkMode
                  ? theme.palette.custom.primary.secondary
                  : theme.palette.custom.primary.secondary,
              }}
            >
              <Checkbox value={rememberMe} color="primary" />
              Remember Me
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            <Copyright sx={{ mt: 5 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                my: "2em",
              }}
            >
              <IconButton>
                {isDarkMode ? (
                  <RiMoonFoggyFill
                    color={
                      isDarkMode ? "rgba(42,103,217,1)" : "rgba(222,60,77,1)"
                    }
                  />
                ) : (
                  <RiMoonFoggyLine
                    color={
                      isDarkMode ? "rgba(42,103,217,1)" : "rgba(222,60,77,1)"
                    }
                  />
                )}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        lg={5}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
}
