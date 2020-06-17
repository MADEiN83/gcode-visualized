import { ROUTE_KEYS, ROUTE_PATHS } from "core/router/routes.config";
import { buildRoute } from "utils/routes/routes.utils";

const useCases = [
  {
    label: "Build route w/o args",
    expected: "/",
    routeKey: ROUTE_KEYS.HOME,
    args: {},
  },
];

describe("Routes utils", () => {
  it("should build a simple route when no argument is needed", () => {
    const url: string = buildRoute(ROUTE_KEYS.HOME);
    expect(url).toBe("/");
  });

  it("Route keys & path must have same key count", () => {
    expect(Object.keys(ROUTE_KEYS).length).toBe(
      Object.keys(ROUTE_PATHS).length
    );
  });
});
