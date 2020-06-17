import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Notification from "./index";

const stories = storiesOf("Notification", module);
stories.addDecorator(withKnobs);

stories.add("Primary", () => (
  <Notification type="primary" onHide={action("on hide")}>
    Success!
  </Notification>
));

stories.add("Secondary", () => (
  <Notification type="secondary" onHide={action("on hide")}>
    Warning: user must be a female!
  </Notification>
));

stories.add("Danger", () => (
  <Notification type="danger" onHide={action("on hide")}>
    Error! User can't reach this article.
  </Notification>
));

stories.add("Customizable", () => (
  <Notification
    type={select("Type", ["primary", "secondary", "danger"])}
    onHide={action("on hide")}
  >
    {text("Content", "Hey... message goes here.")}
  </Notification>
));
