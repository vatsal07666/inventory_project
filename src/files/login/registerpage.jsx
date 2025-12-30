import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "./snackbarContext";

const RegisterSchema = Yup.object({
    username: Yup.string().required("Username is required*"),
    email: Yup.string().email("Invalid email").required("Email is required*"),
    password: Yup.string().required("Password is required*")
                // .max(8,"Password must be 8 characters")
                // .matches(/[A-Z]/, "Password must contain at least one uppercase character")
                // .matches(/[a-z]/, "Password must contain at least one lowercase character")
                // .matches(/\d/, "Password must contain at least one number")
                // .matches(/[!@#$%^&*()]/, "Password must contain at least one special character")
});

const CreateAccount = () => {
    const { showSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    const token = "fJDq0Iu2xB9hHXbo";

    const handleSubmit = (values, {resetForm}) => {
        setLoading(true); // start loading

        const headers = {
            Authorization: token,
            "Content-Type": "application/json",
        };

        // GET request
        axios.get("https://generateapi.techsnack.online/api/register", { headers })
        .then((getRes) => {
            console.log("GET response:", getRes.data, getRes.status);
        })
        .catch((err) => {
            console.error("GET error:", err);
            showSnackbar("GET failed", "error");
        });

        // POST request (login)
        axios.post( "https://generateapi.techsnack.online/api/register",
            { username: values.username, email: values.email, password: values.password },
            { headers }
        )
        .then((postRes) => {
            console.log("POST response:", postRes.data);
            if (postRes.data.Status === "Success") {
                showSnackbar("Account Created successful!", "success");
                resetForm();
                history.push("/");
            } else {
                showSnackbar(postRes.data.message || "Login failed", "error");
            }
        })
        .catch((err) => {
            console.error("POST error:", err);
            showSnackbar(err.response?.data?.message || "Server error", "error");
            // if err.response then if .data then use message
        })
        .finally(() => {
            setLoading(false); // Stop loading
        });
    }

    return (
        <div className="signup-container">
            <Formik initialValues={{ username: "", email: "", password: "" }}
                validationSchema={RegisterSchema}
                onSubmit={handleSubmit} 
            >
                {({ errors, touched }) => (
                    <Form className="signup-box">
                        <h2>Sign Up</h2>

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

                        <Button type="submit" variant="contained" disabled={loading}>
                            {loading ? "Creating Account..." : "Create Account"}
                        </Button>

                        <p className="login-text">
                            Already have an account?
                            <Link to="/" className="login-button">Log in</Link>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateAccount;
