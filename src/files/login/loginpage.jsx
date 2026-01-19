import { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { useSnackbar } from "./snackbarContext";
import axios from "axios";

const LoginSchema = Yup.object({
    username: Yup.string().required("Username is required*"),
    password: Yup.string().required("Password is required*"),
});

const Login = () => {
    const history = useHistory();
    const formikRef = useRef();
    const { showSnackbar } = useSnackbar();
    const [ loading, setLoading ] = useState(false)

    const fillFormData = () => {
        formikRef.current.setValues({
            username: "DemoUser000",
            password: "DEmo@#666"
        })
    }

    const token = "soS9mDZAuFry1GGs";

    const handleSubmit = (values, {resetForm}) => {
        setLoading(true); // start loading

        const headers = {
            Authorization: token,
            "Content-Type": "application/json",
        };

        // GET request
        // axios.get("https://generateapi.techsnack.online/api/login", { headers })
        // .then((getRes) => {
        //     console.log("GET response:", getRes.data, getRes.status);
        // })
        // .catch((err) => {
        //     console.error("GET error:", err);
        //     showSnackbar("GET failed", "error");
        // });

        // POST request (login)
        axios.post( "https://generateapi.techsnack.online/api/login",
            { username: values.username, password: values.password },
            { headers }
        )
        .then((postRes) => {
            console.log("POST response:", postRes.data);
            if (postRes.data.Status === "Success") {
                // STEP 5 (LOGIN) – ADD HERE
                localStorage.setItem("isLoggedIn", "true");
                
                showSnackbar("Login successful!", "success");
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
        <Box className="login-container">

            <Formik innerRef={formikRef}
                initialValues={{ username: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className="login-box">
                        <h2>Log in</h2>

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

                        <Button type="submit" variant="contained" disabled={loading} sx={{textTransform: "none"}}>
                            {loading ? "Logging in..." : "Log In"}
                        </Button>

                        <p className="signup-text">
                            Don’t have an account?
                            <Link to="/register" className="signup-button"> Sign Up </Link>
                        </p>
                    </Form>
                )}
            </Formik>

            <Button variant="contained" onClick={fillFormData} sx={{mt: 3}}>
                username: DemoUser000, password: DEmo@#666
            </Button>
        </Box>
    );
};

export default Login;
