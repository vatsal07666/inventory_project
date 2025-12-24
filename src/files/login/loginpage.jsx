import { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { Snackbar, Alert, Button, Box } from "@mui/material";

const LoginSchema = Yup.object({
    username: Yup.string().required("Username is required*"),
    password: Yup.string().required("Password is required*"),
});

const Login = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const history = useHistory();

    const formikRef = useRef(null);

    const fillDemoData = () => {
        formikRef.current.setValues({
            username: "demo@gmail.com",
            password: "demo123",
        });
    };

    return (
        <Box className="login-container">

            <Formik innerRef={formikRef}
                initialValues={{ username: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Login Data:", values);
                    setOpenSnackbar(true);
                    resetForm();

                    history.push("/dashboard");
                }}
            >
                {({ errors, touched }) => (
                    <Form className="login-box">
                        <h2>Sign in</h2>

                        <label>Username</label>
                        <Field name="username" type="text" placeholder="Enter Username" />
                        {errors.username && touched.username && (
                            <p style={{ color: "red" }}>{errors.username}</p>
                        )}
                        <br />

                        <label>Password</label>
                        <Field name="password" type="password" placeholder="Enter Password" />
                        {errors.password && touched.password && (
                            <p style={{ color: "red" }}>{errors.password}</p>
                        )}
                        <br />

                        <Button type="submit" variant="contained">Log In</Button>

                        <p className="signup-text">
                            Don’t have an account?
                            <Link to="/register" className="signup-button"> Sign Up </Link>
                        </p>
                    </Form>
                )}
            </Formik>

            <Button variant="contained" onClick={fillDemoData} sx={{mt: 3}}>
                username: demo@gmail.com, password: demo123
            </Button>

            {/* Snackbar */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
                    Login successful!
                </Alert>
            </Snackbar>

        </Box>
    );
};

export default Login;
