import { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
    // don't write severity = "" (Avoid write like this) ("success" | "error" | "warning" | "info")
    const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

    const showSnackbar = (message, severity = "success") => {
        setSnackbar({ open: true, message, severity });
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children} {/* children is <App /> */}
            
            <Snackbar
                open={snackbar.open}
                autoHideDuration={1000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity={snackbar.severity}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};
