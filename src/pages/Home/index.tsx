import React from "react";

import { withLayout } from "HOC";
import { Meta } from "components";
import seo from "./seo.config";

const Home: React.FC = () => {
  return (
    <section className="home">
      <Meta meta={seo} />

      <p>Content of Home goes here</p>
    </section>
  );
};

export default withLayout(Home);
