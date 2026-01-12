import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import Navbar from "../components/Navbar/Navbar";
import EmployeeTable from "../components/Employee/EmployeeTable";
import EmployeeForm from "../components/Employee/EmployeeForm";
import FilterDialog from "../components/Employee/FilterDialog";
import ConfirmDialog from "../components/common/ConfirmDialog";

import { getEmployees, saveEmployees } from "../utils/storage";
import NotificationBar from "../components/common/NotificationBar";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    gender: "",
    status: "",
    state: "",
  });
  const [deleteId, setDeleteId] = useState(null);
  useEffect(() => {
    setEmployees(getEmployees());
  }, []);



  const showSnackbar = (message, severity = "success") => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  
  const handleSave = (data) => {
    try {
      let updated;
  
      if (editData) {
        updated = employees.map((e) =>
          e.id === editData.id ? { ...data, id: e.id } : e
        );
        showSnackbar("Employee updated successfully");
      } else {
        updated = [...employees, { ...data, id: Date.now() }];
        showSnackbar("Employee added successfully");
      }
  
      setEmployees(updated);
      saveEmployees(updated);
      setEditData(null);
    } catch (error) {
      showSnackbar("Unable to save employee", "error");
    }
  };

  const confirmDelete = () => {
    try {
      const updated = employees.filter((e) => e.id !== deleteId);
      setEmployees(updated);
      saveEmployees(updated);
      setDeleteId(null);
  
      showSnackbar("Employee deleted successfully");
    } catch (error) {
      showSnackbar("Unable to delete employee", "error");
    }
  };

  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
    setFilterOpen(false);
  };

  const filteredEmployees = employees.filter((e) => {
    const matchSearch =
      e.name.toLowerCase().includes(search.toLowerCase());

    const matchGender =
      !filters.gender || e.gender === filters.gender;

    const matchStatus =
      !filters.status ||
      (filters.status === "active" && e.active) ||
      (filters.status === "inactive" && !e.active);

    const matchState =
      !filters.state || e.state === filters.state;

    return matchSearch && matchGender && matchStatus && matchState;
  });

  return (
    <>
      <Navbar
        onAdd={() => setOpenForm(true)}
        onSearch={setSearch}
        onFilterOpen={() => setFilterOpen(true)}
      />

      <Box sx={{ width: "100%", px: 2, mt: 3 }}>
        <Typography variant="h5" mb={2}>
          Employee List
        </Typography>

        <EmployeeTable
          data={filteredEmployees}
          onEdit={(emp) => {
            setEditData(emp);
            setOpenForm(true);
          }}
          onDelete={(id) => setDeleteId(id)}
        />
      </Box>

      <EmployeeForm
        open={openForm}
        onClose={() => {
          setOpenForm(false);
          setEditData(null);
        }}
        onSave={handleSave}
        editData={editData}
      />

      <FilterDialog
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        filters={filters}
        onApply={handleApplyFilters}
      />
      <ConfirmDialog
        open={Boolean(deleteId)}
        title="Delete Employee"
        message="Are you sure you want to delete this employee? This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={confirmDelete}
      />
      <NotificationBar
  open={snackbar.open}
  message={snackbar.message}
  severity={snackbar.severity}
  onClose={() => setSnackbar({ ...snackbar, open: false })}
/>
    </>
  );
}
