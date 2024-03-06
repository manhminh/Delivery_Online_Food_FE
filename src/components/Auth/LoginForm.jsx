import { Button, Grid, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("form values: ", values);
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Field
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
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
                <Button
                  sx={{ padding: "1rem", mt: 2 }}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>

      <Typography variant="body2" sx={{ mt: 3 }} align="center">
        Don't have an account?
        <Button
          onClick={() => navigate("/account/register")}
          size="small"
          variant="text"
        >
          Register
        </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
