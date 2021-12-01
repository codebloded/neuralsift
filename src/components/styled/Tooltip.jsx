import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import { styled } from "@mui/styles";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color:
      theme.palette.mode === "dark"
        ? theme.palette.custom.primary.secondary
        : theme.palette.custom.primary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.custom.primary.secondary
        : theme.palette.custom.primary.main,
    color:
      theme.palette.mode === "dark"
        ? theme.palette.custom.primary.main
        : theme.palette.custom.primary.secondary,
  },
  padding: theme.spacing(1),
}));

export default BootstrapTooltip;
