import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import { includes } from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory, useLocation } from "react-router-dom";
// import { customLogger } from "../../util/customLogger";
// import { useEntryChecker } from "../../util/hooks/useEntryChecker";
// import { getRedirectRoute } from "../../util/redirectHelper";

function RedirectedRoute({ component: Component }) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  // const reduxUser = useSelector((state) => state.authenticatedUser);
  // const { entryCheck } = useEntryChecker();
  let location = useLocation();
  const { t } = useTranslation();
  const [currentState, setCurrentState] = useState(t("EntryChecker.PleaseWait"));

  const changeSpinner = (loadingStatus) => {
    setLoading(loadingStatus);
  };

  useEffect(() => {
    // customLogger("[redirect-route] - [Checking]");
    // customLogger("[redirect-route] - [Requesting] -", window.location.pathname);
    // customLogger("[redirect-route] - [Redirect]", location?.redirectPath);
    // customLogger("[redirect-route] - [Redux-User] - ", reduxUser.isAuthenticated);

    let entryCheckParams = {
      from: "redirect-route",
      loadingSpinner: changeSpinner,
      history: history,
      redirectPath: location?.redirectPath,
      bypassCache: true,
      statusState: setCurrentState,
    };
    // entryCheck(entryCheckParams);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Component]);

  return (
    <Fragment>
      <Backdrop
        sx={{
          backgroundColor: "transparent",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={loading}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <CircularProgress sx={{ backgroundColor: "transparent" }} />
          <Typography sx={{ p: 1 }} variant="subtitle1">
            {currentState.toString()}
          </Typography>
        </Box>
      </Backdrop>

      <Route
        // render={(props) =>
        //   reduxUser.isAuthenticated === true && !reduxUser.isOnboarding ? (
        //     // <Redirect to={getRedirectRoute(reduxUser.roles)} />
        //     <Redirect to={(reduxUser.roles)} />
        //   ) : reduxUser.isAuthenticated === true && reduxUser.isOnboarding ? (
        //     <Redirect to={(reduxUser.roles)} />
        //   ) : (
        //     <Component {...props} />
        //   )
        // }
      />
    </Fragment>
  );
}

export default RedirectedRoute;
