import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box, Drawer as MuiDrawer, AppBar as MuiAppBar, Toolbar, List, CssBaseline,
  Typography, Divider, ListItemButton, ListItemIcon, ListItemText,
  Collapse, Tooltip,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";


import { useHistory } from "react-router-dom";

const drawerWidth = 240;

/* ------------------- FROSTED GLASS + NEON DRAWER ------------------- */
const Drawer = styled(MuiDrawer)(() => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    background: "rgba(15, 15, 30, 0.35)", // transparent dark glass
    backdropFilter: "blur(14px) saturate(180%)",
    WebkitBackdropFilter: "blur(14px) saturate(180%)",
    borderRight: "1px solid rgba(255,255,255,0.12)",
    color: "#e6e6e6",
    boxShadow: "4px 0 25px rgba(0, 150, 255, 0.15)",
    overflowY: "auto",

    scrollbarWidth: "none",
  },
  '& .MuiDrawer-paper::-webkit-scrollbar': {
    display: "none"
  }
}));

/* ------------------- GLASS APP BAR ------------------- */
const AppBar = styled(MuiAppBar)(() => ({
  zIndex: 2000,
  background: "rgba(0, 0, 20, 0.55)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  boxShadow: "0 4px 20px rgba(0, 150, 255, 0.25)"
}));

/* ------------------- NEON MENU ITEM ------------------- */
const NeonItem = styled(ListItemButton)(() => ({
  transition: "0.3s",
  borderRadius: "6px",
  margin: "4px 8px",

  "&:hover": {
    background: "rgba(0, 140, 255, 0.2)",
    boxShadow: "0 0 8px rgba(0, 150, 255, 0.8)",
    transform: "translateX(6px)"
  }
}));

/* ------------------- NEON SUBMENU ------------------- */
const NeonChild = styled(ListItemButton)(() => ({
  paddingLeft: 32,
  transition: "0.3s",
  borderRadius: "6px",
  margin: "3px 10px",

  "&:hover": {
    background: "rgba(0, 140, 255, 0.25)",
    borderLeft: "3px solid #00b0ff",
    boxShadow: "0 0 10px rgba(0, 160, 255, 0.9)",
    paddingLeft: 35
  }
}));

/* ------------------- DATA ------------------- */
const menuItems = [
  { name: "Product", icon: <InventoryIcon />, children: [
      { label: "Add Product", to: "/dashboard/product/add", icon: <AddIcon /> },
      { label: "View Product", to: "/dashboard/product/view", icon: <GridViewIcon /> }
    ]
  },
  { name: "Category", icon: <CategoryIcon />, children: [
      { label: "Add Category", to: "/dashboard/category/add", icon: <AddIcon /> },
      { label: "View Category", to: "/dashboard/category/view", icon: <GridViewIcon /> }
    ]
  },
  { name: "Purchase", icon: <ShoppingBasketIcon />, children: [
      { label: "Add Purchase", to: "/dashboard/purchase/add", icon: <AddIcon /> },
      { label: "View Purchase", to: "/dashboard/purchase/view", icon: <GridViewIcon /> }
    ]
  },
  { name: "User", icon: <AccountCircleIcon />, children: [
      { label: "Add User", to: "/dashboard/user/add", icon: <AddIcon /> },
      { label: "View User", to: "/dashboard/user/view", icon: <GridViewIcon /> }
    ]
  },
  { name: "Sales", icon: <RealEstateAgentIcon />, children: [
      { label: "Add Sales", to: "/dashboard/sales/add", icon: <AddIcon /> },
      { label: "View Sales", to: "/dashboard/sales/view", icon: <GridViewIcon /> }
    ]
  },
  { name: "Customer", icon: <FaceRetouchingNaturalIcon />, children: [
      { label: "Add Customer", to: "/dashboard/customer/add", icon: <AddIcon /> },
      { label: "View Customer", to: "/dashboard/customer/view", icon: <GridViewIcon /> }
    ]
  },
  {
    name: "Authentication",
    icon: <AccountCircleIcon />,
    children: [
      { label: "Login", to: "/", icon: <LoginIcon /> },
      { label: "Register", to: "/register", icon: <PersonAddIcon /> },
    ]
  },

];

/* ------------------- COMPONENT ------------------- */
const MiniDrawer = ({ children }) => {
  const [menuState, setMenuState] = useState({});
  const history = useHistory();
const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);

const handleMenuOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};

// Logout action
const handleLogout = () => {
  setAnchorEl(null);
  history.push("/login");
};

  const toggleMenu = (name) => setMenuState(prev => ({ ...prev, [name]: !prev[name] }));
  const navigateTo = (path) => history.push(path);

  return (
    <Box sx={{
      display: "flex",
      background: "radial-gradient(circle at top, #0a0a12, #000000 70%)",
      minHeight: "100vh"
    }}>
      <CssBaseline />

      {/* GLASS NAVBAR */}
      <AppBar position="fixed">
        <Toolbar
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }}
>
  <Typography
    variant="h6"
    noWrap
    sx={{
      fontWeight: 600,
      letterSpacing: "1px",
      color: "#bbdefb",
      textShadow: "0 0 8px rgba(0,150,255,0.8)"
    }}
  >
    Dashboard
  </Typography>

  {/* AVATAR MENU */}
  <IconButton
    onClick={handleMenuOpen}
    sx={{
      p: 0,
      transition: "0.3s",
      "&:hover": {
        boxShadow: "0 0 12px rgba(0,150,255,0.8)"
      }
    }}
  >
    <Avatar
      sx={{
        bgcolor: "#0288d1",
        border: "2px solid rgba(0,150,255,0.7)",
        boxShadow: "0 0 8px rgba(0,150,255,0.7)"
      }}
    >
      U
    </Avatar>
  </IconButton>

  <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={handleMenuClose}
    PaperProps={{
      sx: {
        background: "rgba(10, 20, 40, 0.9)",
        color: "#e6e6e6",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 0 18px rgba(0,150,255,0.5)",
        backdropFilter: "blur(12px)"
      }
    }}
    transformOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
  >
    <MenuItem onClick={handleMenuClose}>
      <PersonIcon sx={{ mr: 1, color: "#4fc3f7" }} /> Profile
    </MenuItem>

    <MenuItem onClick={handleMenuClose}>
      <SettingsIcon sx={{ mr: 1, color: "#80d8ff" }} /> Settings
    </MenuItem>

    <MenuItem onClick={handleLogout}>
      <LogoutIcon sx={{ mr: 1, color: "#ef5350" }} /> Logout
    </MenuItem>
  </Menu>
</Toolbar>


      </AppBar>

      {/* FROSTED GLASS + NEON DRAWER */}
      <Drawer variant="permanent">
        <Toolbar />
        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)" }} />

        {menuItems.map(menu => (
          <List key={menu.name}>
            <Tooltip title={menu.name} placement="right">
              <NeonItem onClick={() => toggleMenu(menu.name)}>
                <ListItemIcon sx={{ color: "#4fc3f7" }}>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.name} />
                {menuState[menu.name] ? <ExpandLess /> : <ExpandMore />}
              </NeonItem>
            </Tooltip>

            {/* Submenu */}
            <Collapse in={menuState[menu.name]} timeout="auto" unmountOnExit>
              <List disablePadding>
                {menu.children.map(child => (
                  <Tooltip title={child.label} placement="right" key={child.to}>
                    <NeonChild onClick={() => navigateTo(child.to)}>
                      <ListItemIcon sx={{ color: "#80d8ff" }}>
                        {child.icon}
                      </ListItemIcon>
                      <ListItemText primary={child.label} />
                    </NeonChild>
                  </Tooltip>
                ))}
              </List>
            </Collapse>
          </List>
        ))}
      </Drawer>

      {/* MAIN CONTENT */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, color: "#e6e6e6" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MiniDrawer;
