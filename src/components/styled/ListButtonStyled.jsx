import { ListItemButton } from "@mui/material";
import { styled } from "@mui/styles";

const ListButtonStyled = styled(ListItemButton)(({ theme }) => ({
  borderRadius: "4em",
  padding: "0.1rem 1rem",
  margin: "0.5rem 0rem",
  width: "fit-content",
  "&:hover": {
    background:
      theme.palette.mode === "dark"
        ? `linear-gradient(324deg, ${theme.palette.custom.primary.logoRedFirst} 0%, ${theme.palette.custom.primary.logoRedSecond} 100%)`
        : `linear-gradient(324deg, ${theme.palette.custom.primary.logoBlueFirst} 0%, ${theme.palette.custom.primary.logoBlueSecond} 100%)`,
    color: theme.palette.custom.primary.secondary,
  },
}));

export default ListButtonStyled;
