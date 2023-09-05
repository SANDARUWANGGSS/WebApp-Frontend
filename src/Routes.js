import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import RedirectedRoute from "./Routes/redirected-route";
import { PageNotFound } from "./components/common/PageNotFound";
import { context } from "./resources/constants/StringConstants";

const SignIn = lazy(()=> import("./components/SignIn"));
const Initialize = lazy(() => import("./containers/Initialize"));
export const Routes = () => (
<Switch>
    {/* ------- AUTHENTICATION ROUTES ------- */}
    <Route exact path="/">
      <Redirect to={context + "initialize"} />
    </Route>
    <RedirectedRoute path={context + "initialize"} component={Initialize} />
    <RedirectedRoute path={context + "sign-in"} component={SignIn} />

    <Route exact path={context}>
      <Redirect to={context + "initialize"} />
    </Route>
    <Route path="*">
      <PageNotFound />
    </Route>
</Switch>
);