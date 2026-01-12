import { Grid } from "@mui/material";
import SummaryCard from "./SummaryCard";

import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Dashboard({ employees }) {
  const total = employees.length;
  const active = employees.filter(e => e.active).length;
  const inactive = total - active;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <SummaryCard
          title="Total Employees"
          value={total}
          color="#1976d2"
          icon={<PeopleIcon />}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <SummaryCard
          title="Active Employees"
          value={active}
          color="#2e7d32"
          icon={<CheckCircleIcon />}
          highlight
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <SummaryCard
          title="Inactive Employees"
          value={inactive}
          color="#d32f2f"
          icon={<CancelIcon />}
        />
      </Grid>
    </Grid>
  );
}
