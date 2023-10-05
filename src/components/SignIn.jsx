import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

import Background from "../assets/images/LoginBanner.jpg";
import PageTitleBlock from "./common/PageTitleBlock";
import FormLogo from "./common/FormLogo";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(" + Background + ")",
            backgroundRepeat: "no-repeat",
            // backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          // sx={{
          //   backgroundColor: (t) =>
          //     t.palette.mode === "light"
          //       ? t.palette.grey[50]
          //       : t.palette.grey[900],
          // }}
        >
          {/* <Box sx={!formLoading ? { mb: "4px" } : { mb: "0px" }}>{formLoading && <LinearProgress />}</Box> */}
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="end"
            sx={{ px: 3, py: 1 }}
          >
            {/* <Grid item> {window.location.pathname !== ROUTE_PATHS.MY_ACCOUNT ? <LanguageChanger /> : <></>}</Grid> */}
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "auto",
              justifyContent: "center",
              height: "85vh",
              px: { xs: 1.5, lg: 8, xl: 20 },
              py: { xs: 3, lg: 4, xl: 5 },
            }}
          >
            <Box sx={{ width: "100%", p: 1 }}>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ pt: 2 }}>
                  <FormLogo />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <PageTitleBlock title={"Welcome to SRM"} textAlign="center" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container> */}
    </>
  );
};

