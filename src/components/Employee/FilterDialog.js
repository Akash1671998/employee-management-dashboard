import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import { STATES } from "../constants/states";


export default function FilterDialog({
  open,
  onClose,
  onApply,
  filters,
}) {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters, open]);

  const handleChange = (field, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleApply = () => {
    onApply(localFilters);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Filter Employees
      </DialogTitle>

      <DialogContent>
        {/* GENDER */}
        <TextField
          fullWidth
          select
          label="Gender"
          margin="normal"
          value={localFilters.gender}
          onChange={(e) =>
            handleChange("gender", e.target.value)
          }
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </TextField>

        {/* STATUS */}
        <TextField
          fullWidth
          select
          label="Status"
          margin="normal"
          value={localFilters.status}
          onChange={(e) =>
            handleChange("status", e.target.value)
          }
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </TextField>

        {/* 🔥 STATE DROPDOWN (FULL LIST) */}
        <TextField
          fullWidth
          select
          label="State"
          margin="normal"
          value={localFilters.state}
          onChange={(e) =>
            handleChange("state", e.target.value)
          }
        >
          <MenuItem value="">All</MenuItem>
          {STATES.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose}>Close</Button>
        <Button variant="contained" onClick={handleApply}>
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}
