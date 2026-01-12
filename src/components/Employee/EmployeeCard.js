import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

export default function EmployeeCard({ employee }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{employee.name}</Typography>
        <Typography>{employee.gender}</Typography>
        <Typography>{employee.state}</Typography>
        <Box mt={1}>
          <Chip
            label={employee.active ? "Active" : "Inactive"}
            color={employee.active ? "success" : "error"}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
