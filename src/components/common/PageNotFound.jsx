import { Alert, Box, Grid } from "@mui/material";
import { Fragment } from "react";

export function PageNotFound() {

  return (
    <Fragment>
      <Grid container sx={{ width: "100%" }}>
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
          <Box>
            <Alert severity="warning"> Page Not Found</Alert>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}
