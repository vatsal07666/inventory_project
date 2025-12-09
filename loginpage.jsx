import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

const LoginSchema = Yup.object({
    username: Yup.string().required("Username is required*"),
    password: Yup.string().required("Password is required*"),
});

const Login = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    return (
        <div className="login-container">

            <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Login Data:", values);
                    setOpenSnackbar(true);
                    resetForm();
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

                        <button type="submit">Log In</button>

                        <p className="signup-text">
                            Don’t have an account?
                            <Link to="/register" className="signup-button"> Sign Up </Link>
                        </p>
                    </Form>
                )}
            </Formik>

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

        </div>
    );
};

export default Login;
