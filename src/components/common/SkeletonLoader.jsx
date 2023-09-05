import { Box, Grid, useTheme, Skeleton } from "@mui/material";
import React from "react";

export const SkeletonLoaderWithHeader = () => {
  const theme = useTheme();
  const headerHeight = theme.mixins.toolbar.minHeight;
  return (
    <Box sx={{ height: `calc(98vh - ${headerHeight}px)` }}>
      <Skeleton variant="rectangular" height={64} />
      <Grid container sx={{ minHeight: "100%" }}>
        <Grid item xs="auto" p={0} pt={1} pl={1} sx={{ display: { xs: "none", sm: "block" } }}>
          <Skeleton variant="rectangular" height={"100%"}  />
        </Grid>
        <Grid item xs p={0} pt={1} px={1}>
          <Skeleton variant="rectangular" height={"100%"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export const SkeletonLoaderFull = () => {
  const theme = useTheme();
  const headerHeight = theme.mixins.toolbar.minHeight;
  return (
    <Box sx={{ height: `calc(98vh - ${headerHeight}px)` }}>
      <Grid container sx={{ minHeight: "100%" }}>
        <Grid item xs={12} p={1} pb={0}>
          <Skeleton variant="rectangular" height={"100%"} />
        </Grid>
      </Grid>
    </Box>
  );
};
