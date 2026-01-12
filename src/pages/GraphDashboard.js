import { Box, Typography, Paper } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import { getEmployees } from "../utils/storage";

export default function GraphDashboard() {
  const employees = getEmployees() || [];

  const total = employees.length;
  const active = employees.filter((e) => e.active).length;
  const inactive = total - active;

  return (
    <>
      <Navbar />

      <Box sx={{ width: "100%", px: 2, mt: 3 }}>
        <Typography variant="h5" mb={3}>
          Employee Status Overview
        </Typography>

        {total === 0 ? (
          <Paper
            sx={{
              p: 4,
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            No employee data available
          </Paper>
        ) : (
          <Paper
            sx={{
              p: 4,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-end",
              height: 260,
            }}
          >
            <Box textAlign="center">
              <Box
                sx={{
                  width: 80,
                  height: `${(active / total) * 200}px`,
                  backgroundColor: "#2e7d32",
                  borderRadius: 1,
                }}
              />
              <Typography mt={1}>Active ({active})</Typography>
            </Box>
            <Box textAlign="center">
              <Box
                sx={{
                  width: 80,
                  height: `${(inactive / total) * 200}px`,
                  backgroundColor: "#d32f2f",
                  borderRadius: 1,
                }}
              />
              <Typography mt={1}>Inactive ({inactive})</Typography>
            </Box>
          </Paper>
        )}
      </Box>
    </>
  );
}
