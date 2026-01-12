import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
  } from "@mui/material";
  import WarningAmberIcon from "@mui/icons-material/WarningAmber";
  
  export default function ConfirmDialog({
    open,
    title = "Confirm Action",
    message,
    onCancel,
    onConfirm,
  }) {
    return (
      <Dialog open={open} onClose={onCancel}>
        <DialogTitle>
          <Box display="flex" alignItems="center" gap={1}>
            <WarningAmberIcon color="error" />
            <Typography fontWeight="bold">{title}</Typography>
          </Box>
        </DialogTitle>
  
        <DialogContent>
          <Typography color="text.secondary">
            {message}
          </Typography>
        </DialogContent>
  
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button variant="contained"
            color="error" onClick={onCancel}>
            Cancel
          </Button>
  
          <Button
            variant="contained"
            color="success"
            onClick={onConfirm}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  