import React from "react";

import { toast } from "react-toastify";
import { css } from "glamor";
import { CheckCircleRounded } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const Message = ({ msg, icon }) => (
  <>
    <Grid container direction="row">
      <Grid item>{icon}</Grid>
      &nbsp;
      <Grid item>
        <Typography>{msg}</Typography>
      </Grid>
    </Grid>
  </>
);

toast.configure({
  position: "top-right",
  timerExpires: 5000,
});

const ToastConfig = {
  success(msg) {
    return toast.success(<Message msg={msg} icon={<CheckCircleRounded />} />, {
      className: css({
        background: "#3CD52E",
      }),
    });
  },
  info(msg) {
    return toast.info(<Message msg={msg} icon={<CheckCircleRounded />} />, {
      className: css({
        background: "#0098CE",
      }),
    });
  },
  warn(msg) {
    return toast.warn(<Message msg={msg} icon={<CheckCircleRounded />} />, {
      className: css({
        background: "#FFE900",
      }),
    });
  },
  error(msg) {
    return toast.error(<Message msg={msg} icon={<CheckCircleRounded />} />, {
      className: css({
        background: "#EB0029",
      }),
    });
  },
};

export default ToastConfig;
