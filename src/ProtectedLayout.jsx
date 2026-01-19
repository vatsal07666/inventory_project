import { Redirect } from "react-router-dom";
import MiniDrawer from "./files/minidrawer";
import { isLoggedIn } from "./auth";
import { useSnackbar } from "./files/login/snackbarContext";

const ProtectedLayout = ({ children }) => {
    const { showSnackbar } = useSnackbar();

    if (!isLoggedIn()) {
        showSnackbar("Please login to continue", "warning");
        return <Redirect to="/login" />;
    }

    return <MiniDrawer>{children}</MiniDrawer>;
};

export default ProtectedLayout;
