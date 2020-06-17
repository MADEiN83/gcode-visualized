import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "./routes.config";
import { IRouteArgs } from "./router.interface";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route: IRouteArgs) => (
          <Route key={route.key} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
