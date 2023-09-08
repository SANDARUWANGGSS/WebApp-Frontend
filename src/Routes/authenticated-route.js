import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import { ROUTE_PATHS } from "../resources/constants/RoutePaths";
import { customLogger } from "../../util/customLogger";
import { useEntryChecker } from "../../util/hooks/useEntryChecker";

function AuthRoute({ component: Component }) {
  const [loading, setLoading] = useState(false); // To use in spinner loading animations
  const history = useHistory();
  const reduxUser = useSelector((state) => state.authenticatedUser);
  const { entryCheck } = useEntryChecker();
  const [currentState, setCurrentState] = useState("loading...");

  useEffect(() => {
    customLogger("[authenticated-route] - [Checking]");
    customLogger("[authenticated-route] - [Requesting] -", window.location.pathname);
    customLogger("[authenticated-route] - [Redux-User] - ", reduxUser.isAuthenticated);

    if (reduxUser.isAuthenticated) {
      let entryCheckParams = {
        from: "authenticated-route",
        loadingSpinner: setLoading,
        history: history,
        redirectPath: undefined,
        bypassCache: true,
        statusState: setCurrentState,
      };
      entryCheck(entryCheckParams);
    }
    return () => {
      setLoading(false);
      setCurrentState("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Component]);

  return (
    <Fragment>
      <Route
        render={(props) =>
          reduxUser.isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: ROUTE_PATHS.INITIALIZE,
                redirectPath: window.location.pathname,
              }}
            />
          )
        }
      />
    </Fragment>
  );
}

export default AuthRoute;
