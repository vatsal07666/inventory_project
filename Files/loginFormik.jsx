import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required*"),
  password: Yup.string().required("Password is required*"),
});

const Login = () => {
    return (
        <div className="login-container">
            <Formik initialValues={{ username: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values, { resetForm }) => {
                console.log("Login Data:", values);
                resetForm();
                }}
            >
                {({ errors, touched }) => (
                    <Form className="login-box">
                        <h2>Welcome!</h2>

                        <label>Username</label>
                        <Field name="username" type="text" placeholder="Enter Username" />
                        {errors.username && touched.username && (<p className="error" style={{color:"red"}}>{errors.username}</p>)}

                        <label>Password</label>
                        <Field name="password" type="password" placeholder="Enter Password" />
                        {errors.password && touched.password && (<p className="error" style={{color:"red"}}>{errors.password}</p>)}

                        <button type="submit">Log In</button>

                        <p className="signup-text">
                            Don’t have an account?
                            <Link to="/register" className="signup-button"> Sign Up </Link>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;