import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo, useState } from "react";

import { getTheme } from "./theme";

import Login from "./pages/Login";
import DashboardPage from "./pages/DashboardPage";
import EmployeesPage from "./pages/EmployeesPage";
import GraphDashboard from "./pages/GraphDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navigate to="/employees" />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <EmployeesPage toggleTheme={toggleTheme} mode={mode} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage toggleTheme={toggleTheme} mode={mode} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/graph"
            element={
              <ProtectedRoute>
                <GraphDashboard toggleTheme={toggleTheme} mode={mode} />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/employees" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
