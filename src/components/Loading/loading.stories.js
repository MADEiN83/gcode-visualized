import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import Loading from "./index";

const stories = storiesOf("Loading", module);
stories.addDecorator(withKnobs);

stories.add("Normal", () => <Loading />);

stories.add("Custom message", () => (
  <Loading>Chargement des données de navigation...</Loading>
));

stories.add("Hide content", () => <Loading hideContent />);

stories.add("Center", () => <Loading textAlign="center" />);

stories.add("Right", () => <Loading textAlign="right" />);

stories.add("Size SM", () => <Loading size="sm" />);

stories.add("Size MD", () => <Loading size="md" />);

stories.add("Size LG", () => <Loading size="lg" />);

stories.add("Customizable", () => (
  <Loading
    hideContent={boolean("Hide content", false)}
    textAlign={select("Text align", ["left", "center", "right"])}
    size={select("Size", ["sm", "md", "lg"])}
  >
    {text("Content", "A content")}
  </Loading>
));
