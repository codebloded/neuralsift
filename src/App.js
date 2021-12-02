import { Button, Slide, styled } from "@mui/material";
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

import AuthScreen from "./AuthScreen";
import BranchMaster from "screens/branchPanel/BranchMaster";
import CssBaseline from "@mui/material/CssBaseline";
import Items from "screens/itemPanel/Items";
import MiniVariant from "components/Drawer/MiniVariant";
import { Scrollbars } from "react-custom-scrollbars";
import { SnackbarProvider } from "notistack";
import Supplier from "screens/supplierPanel/Supplier";
import CategoryMaster from "screens/itemPanel/CategoryMaster";
import User from "screens/userPanel/User";
import { UserContext } from "context/UserContext";
import { useContext } from "react";

function App() {
  const { darkMode, setDarkMode } = useContext(UserContext);

  let theme = createTheme({
    typography: {
      fontFamily: "Poppins",
      h2: {
        fontFamily: "DM Serif Display",
      },
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      custom: {
        primary: {
          main: "#0D1117",
          secondary: "#FAFAFA",
          logoBlueFirst: "rgba(42, 103, 217, 0.6)",
          logoBlueSecond: "rgba(32,68,134,0.6)",
          logoBlueFirstW: "rgba(42, 103, 217, 1)",
          logoBlueSecondW: "rgba(32,68,134,1)",
          logoRedFirst: "rgba(222,60,77,0.6)",
          logoRedSecond: "rgba(171,15,37,0.6)",
          logoRedFirstW: "rgba(222,60,77,1)",
          logoRedSecondW: "rgba(171,15,37,1)",
          darkPaperBg: "#161B22",
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);
  theme = createTheme(theme, {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "yellow",
            borderRadius: 0,
            background:
              "linear-gradient(324deg, rgba(42,103,217,1) 0%, rgba(32,68,134,1) 100%)",
            "&:hover": {
              background:
                "linear-gradient(324deg, rgba(222,60,77,1) 0%, rgba(171,15,37,1) 100%)",
            },
          },
        },
      },
    },
  });
  const renderThumb = React.useCallback(
    (style, ...props) => {
      let thumbStyle;
      if (darkMode) {
        thumbStyle = {
          background:
            "linear-gradient(324deg, rgba(42,103,217,1) 0%, rgba(32,68,134,1) 100%)",
        };
      } else
        thumbStyle = {
          background:
            "linear-gradient(324deg, rgba(222,60,77,1) 0%, rgba(171,15,37,1) 100%)",
        };
      return <div style={{ ...style, ...thumbStyle }} {...props} />;
    },
    [theme]
  );

  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Scrollbars
          style={{ height: "100vh" }}
          renderThumbHorizontal={renderThumb}
          renderThumbVertical={renderThumb}
        >
          <SnackbarProvider
            style={{ marginTop: "5em" }}
            maxSnack={3}
            autoHideDuration={3000}
            hideIconVariant={false}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            TransitionComponent={Slide}
            iconVariant={{
              success: "✅",
              error: "✖️",
              warning: "⚠️",
              info: "ℹ️",
            }}
          >
            <Routes>
              <Route exact path="/" element={<MiniVariant />}>
                <Route path="supplier/master" element={<Supplier />} />
                <Route path="item/master" element={<Items />} />
                <Route path="category/create" element={<CategoryMaster />} />
                <Route path="branch/master" element={<BranchMaster />} />
                <Route path="user/new" element={<User />} />
              </Route>
              {/* <Route exact path="/auth" element={<AuthScreen />} />  */}
            </Routes>
          </SnackbarProvider>
        </Scrollbars>
      </ThemeProvider>
    </div>
  );
}

export default App;
