import React from "react";

import { ROUTE_KEYS } from "core/router/routes.config";
import { Navigate } from "components";

const Error404: React.FC = () => {
  return (
    <>
      Error 404
      <p>
        <Navigate to={ROUTE_KEYS.HOME}>Go to home</Navigate>
      </p>
    </>
  );
};

export default Error404;
