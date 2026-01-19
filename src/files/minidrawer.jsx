import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
    Box, Drawer as MuiDrawer, AppBar as MuiAppBar, Toolbar,
    List, CssBaseline, Typography, Divider,Button, 
    ListItemButton, ListItemIcon, ListItemText, Collapse, Tooltip
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import { FaOpencart } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

import { useHistory } from "react-router-dom";
import { useSnackbar } from "./login/snackbarContext";

const drawerWidth = 240; // Width of the sidebar drawer

// Custom styled drawer
// It sets width and hides scrollbars
const Drawer = styled(MuiDrawer)(() => ({
    width: drawerWidth,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        overflowY: "auto",

        scrollbarWidth: "none",
    },
    '& .MuiDrawer-paper::-webkit-scrollbar': {
        display: "none"
    }
}));

// Ensure AppBar stays above Drawer
const AppBar = styled(MuiAppBar)(() => ({
    zIndex: 2000,
}));

// Sidebar menu configuration (data-driven)
const menuItems = [
    { name: "Product", icon: <InventoryIcon />, children: [
            { label: "Add Product", type: "route", to: "/dashboard/product/add", icon: <AddIcon /> },
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
    { name: "User", icon: <AccountCircleIcon />, children: [
            { label: "Add User", to: "/dashboard/user/add", icon: <AddIcon /> },
            { label: "View User", to: "/dashboard/user/view", icon: <GridViewIcon /> }
        ]
    },
];

const MiniDrawer = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(null); // Tracks expand/collapse status of each menu
    const history = useHistory(); // Router history for navigation

    // Toggle expand/collapse for specific menu
    const toggleMenu = (name) => setOpenMenu(prev => ( prev === name ? null : name ));

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const { showSnackbar } = useSnackbar();
    
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("isLoggedIn");
        history.push("/login");
        showSnackbar("Logout successful!", "success");
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            {/* TOP BAR */}
            <AppBar position="fixed">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h5" noWrap sx={{ fontWeight: 600, letterSpacing: "1px" }}>
                        <FaOpencart fontSize={"larger"} />&nbsp; Inventory
                    </Typography>

                    {/* LOGIN BUTTON */}
                    {isLoggedIn ? (
                        <Button
                            variant="outlined"
                            startIcon={<AccountCircleIcon />}
                            onClick={handleLogout}
                            sx={{
                                borderColor: "#03151eff",
                                color: "#0b2b39ff",
                                '&:hover': {
                                    borderColor: "#061116ff",
                                    boxShadow: "0 0 10px rgba(7, 27, 42, 0.7)"
                                }
                            }}
                        >
                            Logout
                        </Button>
                    ) : (
                        <Button
                            variant="outlined"
                            startIcon={<LoginIcon />}
                            onClick={() => history.push("/login")}
                            sx={{
                                borderColor: "#03151eff",
                                color: "#0b2b39ff",
                                '&:hover': {
                                    borderColor: "#061116ff",
                                    boxShadow: "0 0 10px rgba(7, 27, 42, 0.7)"
                                }
                            }}
                        >
                            Login
                        </Button>
                    )}

                </Toolbar>
            </AppBar>

            {/* LEFT SIDEBAR DRAWER */}
            <Drawer variant="permanent">
                <Toolbar />
                <Divider />
                
                {/* HOME BUTTON */}
                <List>
                    <Tooltip title="Dashboard" placement="right"
                        slotProps={{tooltip:{sx:{letterSpacing:2, fontSize: "12px"}}}}
                    >
                        <ListItemButton onClick={() => {history.push("/")}}>
                            <ListItemIcon sx={{fontSize: "24px"}}><MdDashboard /></ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </Tooltip>
                </List>

                {/* MENU ITEMS (loop) */}
                {menuItems.map(menu => (
                    <List key={menu.name}>
                        {/* PARENT BUTTON */}
                        <Tooltip title={menu.name} placement="right" 
                            slotProps={{tooltip:{sx:{letterSpacing:2, fontSize: "12px"}}}}
                        >
                            <ListItemButton onClick={() => toggleMenu(menu.name)}>
                                <ListItemIcon>{menu.icon}</ListItemIcon>
                                <ListItemText primary={menu.name} />

                                {/* Expand / Collapse Icon */}
                                {openMenu === menu.name ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </Tooltip>

                        {/* CHILD ROUTES */}
                        <Collapse in={openMenu === menu.name} timeout="auto" unmountOnExit>
                            <List disablePadding>
                                {menu.children.map(child => (
                                    <Tooltip title={child.label} placement="right" key={child.to}>
                                        <ListItemButton sx={{ pl: 5 }} onClick={() => history.push(child.to)}>
                                            <ListItemIcon>{child.icon}</ListItemIcon>
                                            <ListItemText primary={child.label} />
                                        </ListItemButton>
                                    </Tooltip>
                                ))}
                            </List>
                        </Collapse>
                    </List>
                ))}
            </Drawer>

            {/* MAIN CONTENT AREA */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10}}>
                {children}
            </Box>
        </Box>
    );
};

export default MiniDrawer;