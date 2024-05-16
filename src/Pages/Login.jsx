import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import usePostApi from "../Apis/usePostApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const [auth, setAuth] = useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);
  
  const navigate = useNavigate();
  if (auth) {
    return navigate("/");
  }
  const [postData, setPostData, response, fetch] = usePostApi("user/login");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (error) {
      setTimeout(() => {
        // setError(false);
      }, 4000);

    }
  }, [error]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      name: data.get("firstName"),
      email: data.get("email"),
      phone: data.get("phone"),
      password: data.get("password"),
    };
    try {
      const response = await fetch(user);
      setError(false);
      if (response.data.msg == "Password Incorrect") {
        setError({ password: true });
      } else if (response.data.msg == "User with this email doesnot exists") {
        setError({ email: true });
      } else if (response.data.token) {
        localStorage.setItem("token", response.data.token)
        return navigate("/");
      }

      console.log("The error is: ", response);
    } catch (error) {
      console.log("The Error is: ", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={error?.email && true}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  helperText={
                    error?.email && "User with this email doesnot exists"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={error?.password && true}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  helperText={error?.password && "Incorrect Password"}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/Signup" variant="body2">
                  Not Have an Account? Signup Now
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
