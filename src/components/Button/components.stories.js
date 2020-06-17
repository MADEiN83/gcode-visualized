import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import Button from ".";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

stories.add("Button", () => (
  <Button
    onClick={action("clicked")}
    disabled={boolean("Disabled", false)}
    loading={boolean("Loading", false)}
    type={select("Type", ["primary", "secondary", "danger"], "primary")}
  >
    {text("Label", "Customizable button")}
  </Button>
));
