import { Card, CardContent, Typography, Box } from "@mui/material";

export default function SummaryCard({
  title,
  value,
  icon,
  color,
  highlight = false,
}) {
  return (
    <Card
      elevation={highlight ? 6 : 2}
      sx={{
        borderLeft: `6px solid ${color}`,
        backgroundColor: highlight ? "#f6fbf7" : "#fff",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          <Box
            sx={{
              backgroundColor: color,
              color: "#fff",
              width: 44,
              height: 44,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>

          <Box>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
