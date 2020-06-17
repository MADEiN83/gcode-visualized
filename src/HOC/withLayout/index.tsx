import React, { useEffect } from "react";
import { Header, Footer } from "components";

interface IOptions {
  header?: boolean;
  footer?: boolean;
}

const DEFAULT_OPTIONS: IOptions = {
  header: true,
  footer: true,
};

const withLayout = (
  WrappedComponent: React.FC<any>,
  options: IOptions = DEFAULT_OPTIONS
) => () => {
  const { footer, header } = options;

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      {header && <Header />}
      <WrappedComponent />
      {footer && <Footer />}
    </>
  );
};

export default withLayout;
