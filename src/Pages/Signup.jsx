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
import { createTheme, ThemeProvider, withStyles } from "@mui/material/styles";
import ReactPhoneInput from "react-phone-input-material-ui";
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

const styles = (theme) => ({
  field: {
    margin: "10px 0",
  },
  countryList: {
    ...theme.typography.body1,
  },
});
const defaultTheme = createTheme();

function SignUp(props) {
  const { action } = props;
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState({
    name: false,
    email: false,
    emailText: "",
    password: false,
    phone: false,
  });

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
    // return navigate("/");
  }

  const [phoneValue, setPhoneValue] = useState("");
  const [postData, setPostData, response, fetch] = usePostApi("user/register");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError({
      name: false,
      email: false,
      emailText: "",
      password: false,
      phone: false,
    });
    document.getElementById("signupButton").disabled = true;
    document.getElementById("signupButton").innerText = "LOADING...";
    const data = new FormData(event.currentTarget);

    if (document.getElementById("phone").value.length < 9) {
      error.phone = true;
      setError({ ...error });
      document.getElementById("phoneError").style.display = "block";
      document.getElementById("signupButton").disabled = false;
      document.getElementById("signupButton").innerText = "Sign Up";
      return;
    } else {
      document.getElementById("nameError").style.display = "none";
    }
    const user = {
      name: data.get("firstName") + data.get("lastName"),
      email: data.get("email"),
      phone: "+" + data.get("phone"),
      password: data.get("password"),
    };
    try {
      const response = await fetch(user);
      document.getElementById("nameError").style.display = "none";
      console.log("The error is: ", response);
      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        action();
        // return navigate("/");
      }
    } catch (valError) {
      console.log("The Error is: ", valError);
      const res = valError.response.data;
      if (res.errors) {
        // alert("lot of errors");
        const errors = res.errors.errors;
        errors.forEach((err) => {
          // alert(err.path);
          switch (err.path) {
            case "name":
              // alert("name error");
              error.name = true;
              setError({ ...error });
              document.getElementById("nameError").style.display = "block";
              break;
            case "email":
              // alert("email error");
              error.email = true;
              error.emailText = "Please enter a valid email address";
              setError({ ...error });
              break;
            case "password":
              // alert("password error");
              error.password = true;
              setError({ ...error });
              break;
            default:
              break;
          }
        });
      } else if (res.msg === "User with this email already exists") {
        error.email = true;
        error.emailText = res.msg;
        setError({ ...error });
      }
    }
    document.getElementById("signupButton").disabled = false;
    document.getElementById("signupButton").innerText = "Sign Up";
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <span
                id="nameError"
                className="hidden mt-2 px-5 font-normal text-xs text-red-600"
              >
                {error?.name && "Name must be atleast 2 characters long."}
              </span>
              <Grid item xs={12}>
                <TextField
                  error={error?.email && true}
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  helperText={error?.email && error.emailText}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="text"
                  id="phone"
                /> */}
              </Grid>
              <input type="hidden" name="phone" id="phone" value={phoneValue} />
              <Grid item xs={12}>
                <ReactPhoneInput
                  defaultCountry={"us"}
                  regions={["america", "europe", "asia", "oceania", "africa"]}
                  name="phone"
                  id="phone"
                  component={TextField}
                  onChange={(value) => {
                    setPhoneValue(value);
                  }}
                />
              </Grid>
              <span
                id="phoneError"
                className="hidden mt-2 px-5 font-normal text-xs text-red-600"
              >
                {error?.phone && "Please enter a valid phone number"}
              </span>
              <Grid item xs={12}>
                <TextField
                  error={error?.password && true}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  helperText={
                    error?.password && "Password should be 6 characters long"
                  }
                  autoComplete="new-password"
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
              id="signupButton"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
