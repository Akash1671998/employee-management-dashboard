import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    MenuItem,
  } from "@mui/material";
  import { useState, useEffect } from "react";
  import { STATES } from "../../utils/constants";
  
  export default function FilterDialog({
    open,
    onClose,
    filters,
    onApply,
  }) {
    const [tempFilters, setTempFilters] = useState(filters);
  
    useEffect(() => {
      setTempFilters(filters);
    }, [filters, open]);
  
    return (
      <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>Filter Employees</DialogTitle>
  
        <DialogContent>
          {/* GENDER */}
          <TextField
            select
            fullWidth
            label="Gender"
            margin="normal"
            value={tempFilters.gender}
            onChange={(e) =>
              setTempFilters({ ...tempFilters, gender: e.target.value })
            }
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
  
          {/* STATUS */}
          <TextField
            select
            fullWidth
            label="Status"
            margin="normal"
            value={tempFilters.status}
            onChange={(e) =>
              setTempFilters({ ...tempFilters, status: e.target.value })
            }
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>
  
          {/* STATE */}
          <TextField
            select
            fullWidth
            label="State"
            margin="normal"
            value={tempFilters.state}
            onChange={(e) =>
              setTempFilters({ ...tempFilters, state: e.target.value })
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
  
        <DialogActions>
          <Button variant="contained" color="error" onClick={onClose}>Close</Button>
          <Button
          color="success"
            variant="contained"
            onClick={() => onApply(tempFilters)}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  