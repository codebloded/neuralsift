import * as React from "react";

import { Avatar, Divider, Grid, SwipeableDrawer } from "@mui/material";
import { Camera, CloseSharp } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "components/styled/SearchStyled";
import { styled, useTheme } from "@mui/material/styles";

import AvatarComponent from "../AvatarComponent";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListMenuButtons from "../ListMenuButtons";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { Scrollbars } from "react-custom-scrollbars";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "components/styled/Tooltip";
import Typography from "@mui/material/Typography";
import { UserContext } from "context/UserContext";
import brandLogo from "../../images/logox.png";
import { menu } from "../menu";
import { ToastContainer } from "react-toastify";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  overflowY: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  overflowY: "hidden",
  display: "none",

  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} )`,
    display: "block",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: `calc(100% - ${theme.spacing(9)})`,
  [theme.breakpoints.down("md")]: {
    width: `100%`,
  },
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniVariant() {
  const { darkMode, setDarkMode } = React.useContext(UserContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [auth, setAuth] = React.useState(true);
  const handleAuth = () => {
    setAuth(!auth);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const DrawerComponent = () => {
    return (
      <Box
        sx={{
          minHeight: "100%",
          color: theme.palette.custom.primary.secondary,
          background: darkMode
            ? `linear-gradient(324deg, ${theme.palette.custom.primary.logoBlueFirstW} 0%, ${theme.palette.custom.primary.logoBlueSecondW} 100%)`
            : `linear-gradient(324deg, ${theme.palette.custom.primary.logoRedFirstW} 0%,  ${theme.palette.custom.primary.logoRedSecondW} 100%)`,
        }}
      >
        <Box sx={{ mb: 3 }}>
          <DrawerHeader>
            <Link to="/">
              <Avatar
                alt="logo"
                src={brandLogo}
                sx={{
                  backgroundColor: "#FAFAFA",
                  width: 50,
                  height: 50,
                  mt: 2,
                  boxShadow: 5,
                }}
              />
            </Link>
          </DrawerHeader>
        </Box>

        <Box sx={{ mt: 5, px: 4, ml: 2, py: 3 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        <Box>
          <Box>
            <List>
              {menu.map((item, key) => (
                <>
                  <ListMenuButtons key={key} item={item} />
                  <Divider light variant="middle" />
                </>
              ))}
            </List>
          </Box>

          <DrawerHeader sx={{ mt: 5 }}>
            <Tooltip arrow title="Switch Mode">
              <IconButton
                onClick={() => setDarkMode(!darkMode)}
                sx={{
                  borderRadius: "15%",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.5)",
                  p: 2,
                }}
              >
                {darkMode ? (
                  <Brightness7Icon
                    fontSize="medium"
                    onClick={() => setDarkMode(true)}
                    sx={{
                      color: theme.palette.custom.primary.secondary,
                    }}
                  />
                ) : (
                  <Brightness4Icon
                    onClick={() => setDarkMode(true)}
                    fontSize="medium"
                    sx={{
                      color: theme.palette.custom.primary.secondary,
                    }}
                  />
                )}
              </IconButton>
            </Tooltip>
          </DrawerHeader>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{ backgroundColor: `${darkMode ? "#161B22;" : "#FAFAFA"}` }}
        >
          {!open ? (
            <IconButton
              edge="start"
              onClick={handleDrawerOpen}
              sx={{
                mr: 2,
                display: { xs: "block", sm: "block", md: "none" },
              }}
            >
              <MenuIcon
                fontSize="large"
                sx={{
                  color: darkMode
                    ? theme.palette.custom.secondary
                    : theme.palette.custom.primary.main,
                }}
              />
            </IconButton>
          ) : (
            <IconButton
              edge="start"
              onClick={handleDrawerClose}
              sx={{ mr: 2, display: { xs: "block", sm: "block", md: "none" } }}
            >
              <CloseSharp
                fontSize="large"
                sx={{
                  color: darkMode
                    ? theme.palette.custom.secondary
                    : theme.palette.custom.primary.main,
                }}
              />
            </IconButton>
          )}

          <Typography
            variant="h6"
            sx={{
              color: darkMode
                ? theme.palette.custom.secondary
                : theme.palette.custom.primary.main,
            }}
          >
            CONTINUUM EXCELLENCE
          </Typography>

          <Box display="flex" justifyContent="space-between" marginLeft="auto">
            {!auth ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{
                  alignItems: "flex-start",
                  color: `${darkMode ? "white" : "#0a1929"}`,
                }}
              >
                <Avatar src="" />
              </IconButton>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                sx={{ alignItems: "flex-end" }}
              >
                <AvatarComponent />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        onClose={handleDrawerClose}
        open={open}
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
          overflowY: "hidden",

          "& .MuiDrawer-paper": {
            background: `${darkMode ? "#101317" : "#2C5CB4"}`,
          },
        }}
      >
        <DrawerComponent />
      </Drawer>
      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: "block", sm: "block", md: "block", lg: "none" },
          overflowY: "hidden",
        }}
      >
        <DrawerComponent />
      </SwipeableDrawer>

      <Grid
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.custom.primary.main
              : theme.palette.custom.primary.secondary,
        }}
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <div
          style={{
            minHeight: "100vh",
            height: "100%",
            marginTop: "6em",
          }}
        >
          <Outlet />
        </div>
      </Grid>
    </Box>
  );
}
