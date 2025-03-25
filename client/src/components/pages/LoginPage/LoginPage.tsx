import React from 'react';
import { useState } from "react";
import { TextField, Button, Container, Typography, Paper, Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}


const LoginPage: React.FC = () =>{
    const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>();
    const [loading, setLoading] = useState(false);
  
    const onSubmit = (data: LoginForm) => {
      setLoading(true);
      setTimeout(() => {
        alert(`Logged in with email: ${data.email}`);
        setLoading(false);
      }, 1500);
    };
  
    return(
        <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 8, textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>Login</Typography>
  
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={2}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Box>
  
            <Box mb={2}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
              />
            </Box>
  
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Paper>
      </Container>
    );
}


export default LoginPage;