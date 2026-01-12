import { Snackbar, Alert } from "@mui/material";

export default function NotificationBar({
  open,
  message,
  severity = "success",
  onClose,
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ minWidth: 280 }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
