import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Switch,
  FormControlLabel,
} from "@mui/material";
const STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
];

const initialFormState = {
  name: "",
  gender: "",
  state: "",
  active: true,
};

export default function EmployeeForm({
  open,
  onClose,
  onSave,
  editData,
}) {
  const [formData, setFormData] = useState(initialFormState);
  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData(initialFormState);
    }
  }, [editData, open]);
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    if (!editData) {
      setFormData(initialFormState);
    }

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {editData ? "Edit Employee" : "Add Employee"}
      </DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          label="Employee Name"
          margin="normal"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <TextField
          fullWidth
          select
          label="Gender"
          margin="normal"
          value={formData.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </TextField>
        <TextField
          fullWidth
          select
          label="State"
          margin="normal"
          value={formData.state}
          onChange={(e) => handleChange("state", e.target.value)}
        >
          {STATES.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>
        <FormControlLabel
          sx={{ mt: 1 }}
          control={
            <Switch
              checked={formData.active}
              onChange={(e) =>
                handleChange("active", e.target.checked)
              }
            />
          }
          label="Active"
        />
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button color ="error" variant="contained" onClick={onClose}>Cancel</Button>
        <Button color ="success" variant="contained" onClick={handleSubmit}>
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}
