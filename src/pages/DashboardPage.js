
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../components/Dashboard/Dashboard";
import { getEmployees } from "../utils/storage";
import { Container } from "@mui/material";

export default function DashboardPage() {
  const employees = getEmployees();

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3 }}>
        <Dashboard employees={employees} />
      </Container>
    </>
  );
}
