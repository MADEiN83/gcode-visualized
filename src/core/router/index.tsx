import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "./routes.config";
import { IRouteArgs } from "./router.interface";

import Error404 from "pages/Error404";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route: IRouteArgs) => (
          <Route key={route.key} {...route} />
        ))}

        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
