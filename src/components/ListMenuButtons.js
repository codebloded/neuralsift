import {
  Avatar,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React, { useContext } from "react";

import { Box } from "@mui/system";
import ListButtonStyled from "components/styled/ListButtonStyled";
import { NavLink } from "react-router-dom";
import Tooltip from "components/styled/Tooltip";
import { UserContext } from "context/UserContext";

// const AvatarStyled = styled(Avatar)(({ theme }) => ({

// }))

export default function ListMenuButtons({ item }) {
  const [open, setOpen] = React.useState(false);
  const { darkMode, location } = useContext(UserContext);
  const theme = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };

  const menu = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "space-around",
    flex: 1,
  };
  return (
    <div>
      <Tooltip placement="left-end" title={item.title}>
        {/* <NavLink to={item.NavLink} style={{ textDecoration: "none", color: "white" }}> */}
        <ListButtonStyled onClick={handleClick}>
          <div style={menu}>
            <Avatar
              sx={{
                ml: 0,
                mr: 2,
                pl: 0,
                backgroundColor: "transparent",
                color: "#FAFAFA",
              }}
            >
              {item.icon}
            </Avatar>
            <ListItemText primary={item.title} sx={{ pr: 1 }} />
            {/* { ? (
              <p>active{item.title}</p>
            ) : null} */}
            {() => {
              if (location.pathname.includes(item.slug)) {
                setOpen(true);
              } else {
                setOpen(false);
              }
            }}
            {location.pathname.includes(item.slug) ? (
              <ExpandLess sx={{ paddingLeft: "5px" }} />
            ) : (
              <ExpandMore sx={{ paddingLeft: "5px" }} />
            )}
          </div>
        </ListButtonStyled>
        {/* </NavLink> */}
      </Tooltip>
      <Collapse
        in={location.pathname.includes(item.slug) ? true : open}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {item.items.map((data, idx) => (
            <ListButtonStyled
              key={idx}
              sx={{
                width: "fit-content",
                background:
                  location.pathname === data.link
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
              }}
            >
              <NavLink
                to={data.link}
                style={({ isActive }) => {
                  return {
                    textDecoration: "none",
                    color: "#FAFAFA",
                    paddingLeft: "3.5em",
                  };
                }}
              >
                -> {data.title}
              </NavLink>
            </ListButtonStyled>
          ))}
        </List>
      </Collapse>
    </div>
  );
}
