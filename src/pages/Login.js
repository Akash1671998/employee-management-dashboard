import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // mock login
    localStorage.setItem("isAuth", "true");
    navigate("/employees"); // default page
  };

  return (
    <Box display="flex" height="100vh" width="100%">
      {/* ================= LEFT BRANDING ================= */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          background: "linear-gradient(135deg, #1565c0, #42a5f5)",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Decorative circle */}
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            top: -60,
            left: -60,
          }}
        />

        {/* Logo */}
        <Box
          sx={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            boxShadow: "0 0 30px rgba(255,255,255,0.25)",
          }}
        >
          <BusinessIcon sx={{ fontSize: 80 }} />
        </Box>

        <Typography variant="h3" fontWeight="bold">
          Employee Manager
        </Typography>

        <Typography
          variant="body1"
          sx={{ mt: 1, opacity: 0.9, letterSpacing: 0.5 }}
        >
          Manage your workforce efficiently
        </Typography>
      </Box>

      {/* ================= RIGHT LOGIN ================= */}
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="#f4f6f8"
      >
        <Card
          sx={{
            width: 400,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          }}
        >
          <CardContent sx={{ p: 4 }}>
            {/* Header */}
            <Box display="flex" alignItems="center" gap={1.2} mb={1}>
              <LockIcon color="primary" />
              <Typography variant="h6" fontWeight="bold">
                Login to your account
              </Typography>
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              mb={3}
            >
              Enter your credentials to continue
            </Typography>

            <Divider sx={{ mb: 3 }} />

            {/* Username */}
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              InputProps={{ sx: { borderRadius: 2 } }}
            />

            {/* Password with Show / Hide */}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              InputProps={{
                sx: { borderRadius: 2 },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Login Button */}
            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<LoginIcon />}
              sx={{
                mt: 4,
                py: 1.2,
                borderRadius: 2,
                fontWeight: "bold",
                letterSpacing: 0.5,
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
