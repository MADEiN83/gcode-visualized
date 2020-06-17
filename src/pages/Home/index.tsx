import React from "react";

import { withLayout } from "HOC";
import { Printer } from "components";

const Home: React.FC = () => {
  return (
    <section className="home">
      <Printer />
    </section>
  );
};

export default withLayout(Home);
