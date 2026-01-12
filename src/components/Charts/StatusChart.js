import { Box, Typography } from "@mui/material";

export default function StatusChart({ active, inactive }) {
  const total = active + inactive;

  return (
    <Box display="flex" gap={4} alignItems="flex-end" height={200}>
      {[{label:"Active",val:active,color:"green"},
        {label:"Inactive",val:inactive,color:"red"}].map(item => (
        <Box key={item.label} textAlign="center">
          <Box
            sx={{
              width: 60,
              height: `${(item.val / total) * 100}%`,
              bgcolor: item.color
            }}
          />
          <Typography>{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
}
