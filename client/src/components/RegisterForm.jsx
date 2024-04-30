import { TextField, Button, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const RegisterForm = () => {
  const validateEmail = (email) => {
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePasswordConfirmation = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = data.get("first-name");
    const lastName = data.get("last-name");
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirm-password");

    // Validate email
    if (!validateEmail(email)) {
      console.error("Invalid email address");
      return;
    }

    // Validate password confirmation
    if (!validatePasswordConfirmation(password, confirmPassword)) {
      console.error("Password confirmation does not match");
      return;
    }

    try {
      // Register user with Supabase
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }

    } catch (error) {
      console.error("Sign up error:", error.message);
    }

    // Handle form submission
    console.log({ firstName, lastName, email, password });
  };

  const handleGoogleLogin = async () => {
    try {
      const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });

      if (error) {
        throw error;
      }

    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="register-form w-[100%]"
    >
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="first-name"
          label="First Name"
          name="first-name"
          autoComplete="first-name"
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="last-name"
          label="Last Name"
          name="last-name"
          autoComplete="last-name"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirm-password"
          label="Confirm Password"
          type="password"
          id="confirm-password"
        />
      </Grid>

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>

      <Button 
        fullWidth 
        variant="contained" 
        color="primary" 
         // Handle Google login
        onClick={handleGoogleLogin}
        sx={{ mt: 3, mb: 2 }}
      >
        Register with Google
      </Button>

      <Grid container>
        <Grid item>
          <Link component={RouterLink} to="/login" variant="body2">
            {"Already have an account? Sign In"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
