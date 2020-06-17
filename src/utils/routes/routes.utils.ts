import { ROUTE_PATHS } from "core/router/routes.config";

/**
 * Build a complete route with argument(s).
 * @param routeKey Unique key to identify the route (from ROUTE_KEYS constant).
 * @param args All arguments that'll replace arguments from route path.
 * @returns A fully fonctionnal route path.
 */
export const buildRoute = (routeKey: string, args: any = {}): string => {
  const routePath = ROUTE_PATHS[routeKey] || "";
  const keys = Object.keys(args);
  let output = routePath;

  for (const key of keys) {
    const value: string = args[key];
    output = routePath.replace(`:${key}?`, value).replace(`:${key}`, value);
  }

  return output;
};
