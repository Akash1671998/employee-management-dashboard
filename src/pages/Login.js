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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isAuth", "true");
      setError("");
      navigate("/employees");
    } else {
      setError("Invalid credential");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d47a1, #42a5f5)",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            top: -80,
            left: -80,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            bottom: -60,
            right: -60,
          }}
        />
        <Box
          sx={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            boxShadow: "0 0 40px rgba(255,255,255,0.35)",
            backdropFilter: "blur(6px)",
          }}
        >
          <BusinessIcon sx={{ fontSize: 85 }} />
        </Box>

        <Typography variant="h3" fontWeight="bold" letterSpacing={0.5}>
          Employee Manager
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            opacity: 0.9,
            fontSize: 16,
            letterSpacing: 0.5,
          }}
        >
          Admin Panel – Demo Access
        </Typography>
      </Box>
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
            width: 420,
            borderRadius: 4,
            boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box display="flex" alignItems="center" gap={1.2} mb={1}>
              <LockIcon color="primary" />
              <Typography variant="h6" fontWeight="bold">
                Admin Login
              </Typography>
            </Box>

            <Typography variant="body2" color="text.secondary" mb={2.5}>
              Sign in to manage employees
            </Typography>

            <Divider sx={{ mb: 3 }} />
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{ sx: { borderRadius: 2 } }}
            />
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<LoginIcon />}
              sx={{
                mt: 4,
                py: 1.3,
                borderRadius: 2,
                fontWeight: "bold",
                letterSpacing: 0.5,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(25,118,210,0.4)",
                },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
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
