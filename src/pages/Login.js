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
  Alert,
} from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // 🔐 state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // ✅ ONLY CHANGE: strict admin login
  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isAuth", "true");
      setError("");
      navigate("/employees");
    } else {
      setError("Invalid credentials. Use admin / admin");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
      {/* ================= LEFT BRANDING (AS BEFORE) ================= */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1565c0, #42a5f5)",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.18)",
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

        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Admin Panel – Demo Login
        </Typography>
      </Box>

      {/* ================= RIGHT LOGIN CARD ================= */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f4f6f8",
        }}
      >
        <Card
          sx={{
            width: 400,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <LockIcon color="primary" />
              <Typography variant="h6" fontWeight="bold">
                Admin Login
              </Typography>
            </Box>

            <Typography variant="body2" color="text.secondary" mb={2}>
              Use admin credentials to access the system
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <TextField
              fullWidth
              label="Username"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
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

            <Button
              fullWidth
              variant="contained"
              startIcon={<LoginIcon />}
              sx={{ mt: 3, py: 1.2, fontWeight: "bold" }}
              onClick={handleLogin}
            >
              Login
            </Button>

            <Typography
              variant="caption"
              display="block"
              textAlign="center"
              mt={2}
              color="text.secondary"
            >
              Demo Credentials → <b>admin / admin</b>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
