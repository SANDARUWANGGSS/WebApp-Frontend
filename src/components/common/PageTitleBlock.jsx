import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { useHistory } from "react-router";

export default function PageTitleBlock(props) {
  const history = useHistory();

  return (
    <Box variant="outlined" sx={{ py: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent={props.textAlign === "center" ? "center" : "space-between"}
        alignItems="center">
        <Grid item>
          <Grid container direction="row" justifyContent="flex-start" alignItems="stretch">
            <Grid item sx={{ px: 0.5 }}>
              {props?.backTo && (
                <IconButton size="small" onClick={() => history.push(props?.backTo)}>
                  <ArrowBackIcon />
                </IconButton>
              )}
            </Grid>
            <Grid item>
              <Typography
                component="h5"
                sx={{
                  typography: {
                    xs: "h6",
                    sm: "h5",
                    textAlign: props.textAlign ? props.textAlign : "left",
                  },
                  width: "100%",
                }}
                gutterBottom={props.subTitle ? false : true}>
                {props.title}
              </Typography>
              {props?.subTitle && (
                <Typography
                  sx={{
                    typography: {
                      xs: "subtitle2",
                      sm: "subtitle1",
                      textAlign: props.textAlign ? props.textAlign : "left",
                    },
                  }}
                  gutterBottom>
                  {props.subTitle}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        {props?.secondaryAction && (
          <Grid item xs={12} sm={12} md={4} lg={4} xl={2} sx={{ p: 1 }}>
            {props?.secondaryAction}
          </Grid>
        )}
      </Grid>
      <Divider />
    </Box>
  );
}
