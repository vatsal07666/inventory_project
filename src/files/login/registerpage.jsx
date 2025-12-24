import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { Alert, Button, Snackbar } from "@mui/material";
import { useState } from "react";

const RegisterSchema = Yup.object({
    username: Yup.string().required("Username is required*"),
    email: Yup.string().email("Invalid email").required("Email is required*"),
    password: Yup.string().required("Password is required*")
                .max(8,"Password must be 8 characters")
                .matches(/[A-Z]/, "Password must contain at least one uppercase character")
                .matches(/[a-z]/, "Password must contain at least one lowercase character")
                .matches(/\d/, "Password must contain at least one number")
                .matches(/[!@#$%^&*()]/, "Password must contain at least one special character")
});

const CreateAccount = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const history = useHistory();

    return (
        <div className="signup-container">
            <Formik initialValues={{ username: "", email: "", password: "" }}
                    validationSchema={RegisterSchema}
                    onSubmit={(values, { resetForm }) => {
                    console.log("New Account:", values);
                    setOpenSnackbar(true)
                    resetForm();

                    history.push("/login");
                }} >
                {({ errors, touched }) => (
                    <Form className="signup-box">
                        <h2>Create Account</h2>

                        <label>Username</label>
                        <Field name="username" type="text" placeholder="Enter Username" />
                        {errors.username && touched.username && (<p style={{color:"red"}}>{errors.username}</p>)}
                        <br />

                        <label>Email</label>
                        <Field name="email" type="email" placeholder="Enter E-mail" />
                        {errors.email && touched.email && (<p style={{color:"red"}}>{errors.email}</p>)}
                        <br />

                        <label>Password</label>
                        <Field name="password" type="password" placeholder="Enter Password" />
                        {errors.password && touched.password && (<p style={{color:"red"}}>{errors.password}</p>)}
                        <br />

                        <Button type="submit" variant="contained">Create Account</Button>

                        <p className="login-text">
                            Already have an account?
                            <Link to="/" className="login-button">Log in</Link>
                        </p>
                    </Form>
                )}
            </Formik>

            <Snackbar open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{vertical:"bottom", horizontal:"center"}}
            >
                <Alert severity="success" onClose={() => setOpenSnackbar(false)}>Create Account Successfully!</Alert>
            </Snackbar>
        </div>
    );
};

export default CreateAccount;


// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

// <button
//     type="button"
//     onClick={() => {
//         setLoginbar(true);
//         setTimeout(() => navigate("/"), 1500);
//     }}
// >
//     Log in
// </button>
