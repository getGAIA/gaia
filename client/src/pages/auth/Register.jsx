import { TextField, Button, Grid, Link } from "@mui/material";
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ minHeight: "calc(100vh - 64px - 100px)", margin: "auto", maxWidth: "400px" }}
      className="register"
    >
      <RegisterForm />
    </Grid>
  );
};

export default Register;
