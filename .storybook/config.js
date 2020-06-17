import { configure } from "@storybook/react";

import "../src/assets/css/style.scss";

configure(require.context("../src", true, /\.stories\.js$/), module);
