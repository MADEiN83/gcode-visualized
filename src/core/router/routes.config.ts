import { IRouteArgs } from "./router.interface";
import Home from "pages/Home";

export const ROUTE_KEYS = { HOME: "home", PAGE2: "page2" };

export const ROUTE_PATHS = {
  [ROUTE_KEYS.HOME]: "/",
  [ROUTE_KEYS.PAGE2]: "/page2"
};

const routes: IRouteArgs[] = [
  {
    key: ROUTE_KEYS.HOME,
    path: ROUTE_PATHS[ROUTE_KEYS.HOME],
    component: Home,
    exact: true
  }
];

export default routes;
