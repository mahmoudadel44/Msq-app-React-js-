import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { ALLOWED_LOGIN } from "../redux/types/types";

//Css
import "../styles/Login.scss";

const Login = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onSumit = () => {
    setShowSpinner(true);
    dispatch({ type: ALLOWED_LOGIN });
    toast.success("loggedin successfully");
    setTimeout(() => {
      nav("/exam");
    }, 2000);
  };

  return (
    <main>
      <section className="login">
        <div className="container">
          <h1 className="text-center">Login Form</h1>
          <form className="m-auto mt-4">
            <div>
              <Formik
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={onSumit}
                validationSchema={Yup.object().shape({
                  name: Yup.string().required("Name is Required"),
                  email: Yup.string()
                    .email("Please Enter Valid Email")
                    .required("Email is Required"),
                  password: Yup.string()
                    .min(6, "The password must be at least six characters")
                    .required("Password Is Required"),
                })}
                render={({
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  errors,
                  touched,
                }) => (
                  <div>
                    <div className="form-group">
                      <label htmlFor="name">
                        Name <span className="requiredMark">*</span>
                      </label>
                      <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="name"
                        className="form-control my-2"
                        placeholder="Name"
                      />
                      <small className="form-text text-danger">
                        {errors.name && touched.name ? errors.name : null}
                      </small>
                    </div>

                    <div className="form-group mt-3">
                      <label htmlFor="email">
                        Email address <span className="requiredMark">*</span>
                      </label>
                      <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="email"
                        className="form-control my-2"
                        placeholder="Email"
                      />
                      <small className="form-text text-danger">
                        {errors.email && touched.email ? errors.email : null}
                      </small>
                    </div>

                    <div className="form-group mt-3">
                      <label htmlFor="password">
                        Password <span className="requiredMark">*</span>
                      </label>
                      <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        className="form-control my-2"
                        placeholder="Password"
                        name="password"
                      />
                      <small className="form-text text-danger">
                        {errors.password && touched.password
                          ? errors.password
                          : null}
                      </small>{" "}
                    </div>
                    <div className="form-group mt-4">
                      <button
                        type="submit"
                        title="Login"
                        onClick={handleSubmit}
                        className="loginBtn"
                      >
                        {showSpinner ? (
                          <div className="d-flex align-items-center">
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>{" "}
                            <span className="loading">Loading...</span>
                          </div>
                        ) : (
                          <div className="">Login</div>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
