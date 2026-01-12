import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
    Paper,
    Box,
    Typography,
    Tooltip,
    TableContainer,
  } from "@mui/material";
  import EditIcon from "@mui/icons-material/Edit";
  import DeleteIcon from "@mui/icons-material/Delete";
  
  export default function EmployeeTable({ data, onEdit, onDelete }) {
    return (
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          border: "1px solid #ccc",
        }}
      >
        <TableContainer sx={{ width: "100%" }}>
          <Table sx={{ minWidth: 1200 /* table ko wide banata hai */ }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Gender</b></TableCell>
                <TableCell><b>State</b></TableCell>
                <TableCell><b>Status</b></TableCell>
                <TableCell align="center"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
  
            <TableBody>
              {data.map((emp, index) => (
                <TableRow
                  key={emp.id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#fff" : "#f9fbfd",
                    "&:hover": { backgroundColor: "#eef4ff" },
                  }}
                >
                  <TableCell>{emp.name}</TableCell>
                  <TableCell>{emp.gender}</TableCell>
                  <TableCell>{emp.state}</TableCell>
  
                  {/* STATUS */}
                  <TableCell>
                    <Tooltip title={emp.active ? "Active" : "Inactive"}>
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={1.5}
                        sx={{ cursor: "pointer", width: "fit-content" }}
                      >
                        <Box
                          sx={{
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            backgroundColor: emp.active
                              ? "#2e7d32"
                              : "#d32f2f",
                          }}
                        />
                        <Typography variant="body2">
                          {emp.active ? "Active" : "Inactive"}
                        </Typography>
                      </Box>
                    </Tooltip>
                  </TableCell>
  
                  {/* ACTIONS */}
                  <TableCell align="center">
                    <IconButton
                      sx={{ color: "#2e7d32" }}
                      onClick={() => onEdit(emp)}
                    >
                      <EditIcon />
                    </IconButton>
  
                    <IconButton
                      sx={{ color: "#d32f2f" }}
                      onClick={() => onDelete(emp.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
  
              {data.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No employees found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
  