import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "",
  };

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("form values: ", values);
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>

      <div className="py-3">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
                    <InputLabel id="role-select">Role</InputLabel>

                    <Field
                      variant="outlined"
                      as={Select}
                      labelId="role-select"
                      name="role"
                    >
                      <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                      <MenuItem value={"ROLE_RESTAURANT_OWNER"}>
                        Restaurant Owner
                      </MenuItem>
                    </Field>
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
