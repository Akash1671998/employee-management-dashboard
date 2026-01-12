import {
    Dialog, DialogTitle, DialogContent,
    TextField, MenuItem, Switch,
    Button, Box
  } from "@mui/material";
  import { useState, useEffect } from "react";
  import { STATES, GENDERS } from "../../utils/constants";
  
  export default function EmployeeForm({ open, onClose, onSave, editData }) {
    const [form, setForm] = useState({
      name: "",
      gender: "",
      state: "",
      active: true,
    });
  
    useEffect(() => {
      if (editData) setForm(editData);
    }, [editData]);
  
    const handleChange = (e) => {
      const { name, value, checked, type } = e.target;
      setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };
  
    const handleSubmit = () => {
      if (!form.name || !form.gender || !form.state) return;
      onSave(form);
      onClose();
    };
  
    return (
      <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>{editData ? "Edit Employee" : "Add Employee"}</DialogTitle>
  
        <DialogContent>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            margin="normal"
          />
  
          <TextField
            select
            fullWidth
            label="Gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            margin="normal"
          >
            {GENDERS.map(g => (
              <MenuItem key={g} value={g}>{g}</MenuItem>
            ))}
          </TextField>
  
          <TextField
            select
            fullWidth
            label="State"
            name="state"
            value={form.state}
            onChange={handleChange}
            margin="normal"
          >
            {STATES.map(s => (
              <MenuItem key={s} value={s}>{s}</MenuItem>
            ))}
          </TextField>
  
          <Box display="flex" alignItems="center" mt={2}>
            Active <Switch checked={form.active} name="active" onChange={handleChange} />
          </Box>
  
          <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
            Save
          </Button>
        </DialogContent>
      </Dialog>
    );
  }
  