"use client";
import { Snackbar, Alert } from "@mui/material";
import { AlertColor } from "@mui/material/Alert";
import { SnackbarOrigin } from "@mui/material/Snackbar";

interface SnackbarAlertProps {
  open: boolean;
  message?: string;
  severity?: AlertColor;
  duration?: number;
  position?: SnackbarOrigin;
  onClose: () => void;
}

export default function SnackbarAlert({
  open,
  message,
  severity = "info",
  duration = 1000,
  position = { vertical: "bottom", horizontal: "center" },
  onClose,
}: SnackbarAlertProps) {
  // Using this ternary we avoid a little flickering that showed for a moment an empty message. This looks cleaner.
  return message ? (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={position}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{ width: "100%" }}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  ) : null;
}
