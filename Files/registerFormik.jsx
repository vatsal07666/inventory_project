import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./App.css";

const RegisterSchema = Yup.object().shape({
    username: Yup.string().required("Username is required*"),
    email: Yup.string().email("Invalid email").required("Email is required*"),
    password: Yup.string().required("Password is required*"),
});

const CreateAccount = () => {
    return (
        <div className="signup-container">
            <Formik initialValues={{ username: "", email: "", password: "" }}
                validationSchema={RegisterSchema}
                onSubmit={(values, { resetForm }) => {
                console.log("New Account:", values);
                resetForm();
                }}
            >
                {({ errors, touched }) => (
                    <Form className="signup-box">
                        <h2>Create Account</h2>

                        <label>Username</label>
                        <Field name="username" type="text" placeholder="Enter Username" />
                        {errors.username && touched.username && (<p className="error" style={{color:"red"}}>{errors.username}</p>)}

                        <label>Email</label>
                        <Field name="email" type="email" placeholder="Enter E-mail" />
                        {errors.email && touched.email && (<p className="error" style={{color:"red"}}>{errors.email}</p>)}

                        <label>Password</label>
                        <Field name="password" type="password" placeholder="Enter Password" />
                        {errors.password && touched.password && (<p className="error" style={{color:"red"}}>{errors.password}</p>)}

                        <button type="submit">Create Account</button>

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