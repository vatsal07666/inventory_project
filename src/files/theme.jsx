import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
    // drawerBg: "#1e293b", // custom
  },

  typography: {
    fontFamily: "'Inter', sans-serif",
    h6: {
      fontWeight: 600,
    },
  },

  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1e293b",
          color: "#fff",
          borderRight: "none",
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          margin: "4px 8px",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.08)",
          },
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

export default theme;
