import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Navigate from ".";
import { BrowserRouter } from "react-router-dom";
import { ROUTE_KEYS } from "../../core/router/routes.config";

const stories = storiesOf("Navigate", module);

stories.addDecorator(withKnobs);

stories.add("Navigate", () => (
  <BrowserRouter>
    <Navigate to={ROUTE_KEYS.HOME} args={{}}>
      Go to home
    </Navigate>
  </BrowserRouter>
));
