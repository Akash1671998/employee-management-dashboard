import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    InputBase,
    Tooltip,
    Divider,
  } from "@mui/material";
  
  import DashboardIcon from "@mui/icons-material/Dashboard";
  import PeopleIcon from "@mui/icons-material/People";
  import BarChartIcon from "@mui/icons-material/BarChart";
  import AddIcon from "@mui/icons-material/Add";
  import FilterListIcon from "@mui/icons-material/FilterList";
  import SearchIcon from "@mui/icons-material/Search";
  import BusinessIcon from "@mui/icons-material/Business";
  import LogoutIcon from "@mui/icons-material/Logout";
  
  import { useNavigate } from "react-router-dom";
  
  export default function Navbar({ onAdd, onSearch, onFilterOpen }) {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem("isAuth");
      navigate("/login");
    };
  
    return (
      <AppBar position="static">
        <Toolbar sx={{ gap: 2 }}>
          <Box display="flex" alignItems="center" gap={1}>
            <BusinessIcon sx={{ fontSize: 28 }} />
            <Typography variant="h6" fontWeight="bold">
              Employee Manager
            </Typography>
          </Box>
  
          <Divider
            orientation="vertical"
            flexItem
            sx={{ mx: 2, borderColor: "rgba(255,255,255,0.3)" }}
          />
          <Box display="flex" alignItems="center" gap={2} sx={{ flexGrow: 1 }}>
            <Box
              display="flex"
              alignItems="center"
              gap={0.5}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/dashboard")}
            >
              <DashboardIcon />
              <Typography>Dashboard</Typography>
            </Box>
  
            <Typography color="rgba(255,255,255,0.5)">|</Typography>
  
            <Box
              display="flex"
              alignItems="center"
              gap={0.5}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/employees")}
            >
              <PeopleIcon />
              <Typography>Employees</Typography>
            </Box>
  
            <Typography color="rgba(255,255,255,0.5)">|</Typography>
  
            <Box
              display="flex"
              alignItems="center"
              gap={0.5}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/graph")}
            >
              <BarChartIcon />
              <Typography>Overview</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.15)",
              px: 1,
              borderRadius: 1,
            }}
          >
            <SearchIcon />
            <InputBase
              placeholder="Search name…"
              sx={{ color: "white", ml: 1, width: 160 }}
              onChange={(e) => onSearch?.(e.target.value)}
            />
            <Tooltip title="Filter">
              <IconButton color="inherit" onClick={onFilterOpen}>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Tooltip title="Add Employee">
            <IconButton color="inherit" onClick={onAdd}>
              <AddIcon />
            </IconButton>
          </Tooltip>
  
          <Tooltip title="Logout">
            <IconButton color="error" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    );
  }
  