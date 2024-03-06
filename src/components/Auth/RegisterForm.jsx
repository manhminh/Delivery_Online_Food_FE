import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/user/userAction";
import * as Yup from "yup";

const RegisterForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("FullName is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be at least 3 characters")
      .max(16, "Password must not exceed 16 characters")
      .required("Password is required"),
    role: Yup.string().notOneOf(["", "NONE_ROLE"], "Role is required"),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("form values: ", values);
    dispatch(registerUser({ userData: values, navigate }));
  };

  const CustomInputComponent = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <div>
      <input type="text" {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>

      <div className="py-3">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    name="fullName"
                    label="FullName"
                    variant="outlined"
                    fullWidth
                    as={TextField}
                    error={errors.fullName && touched.fullName}
                    helperText={
                      errors.fullName && touched.fullName ? (
                        <span className="text-red-500">{errors.fullName}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    as={TextField}
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? (
                        <span className="text-red-500">{errors.email}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    as={TextField}
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password ? (
                        <span className="text-red-500">{errors.password}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Field
                      variant="outlined"
                      as={Select}
                      name="role"
                      error={errors.role && touched.role}
                    >
                      <MenuItem value={"NONE_ROLE"}>Select Role</MenuItem>
                      <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                      <MenuItem value={"ROLE_RESTAURANT_OWNER"}>
                        Restaurant Owner
                      </MenuItem>
                    </Field>

                    {errors.role && touched.role ? (
                      <FormHelperText>
                        <span className="text-red-500">{errors.role}</span>
                      </FormHelperText>
                    ) : null}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    sx={{ padding: "1rem", mt: 2 }}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>

      <Typography variant="body2" sx={{ mt: 3 }} align="center">
        If have an account already?
        <Button
          onClick={() => navigate("/account/login")}
          size="small"
          variant="text"
        >
          Login
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
