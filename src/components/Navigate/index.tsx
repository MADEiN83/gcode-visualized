import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { buildRoute } from "utils/routes/routes.utils";

interface IProps {
  children: any;
  to: string;
  args?: any;
}

const Navigate: React.FC<IProps> = (props: IProps) => {
  const { children, to, args = {} } = props;
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    const newLink = buildRoute(to, args);
    setLink(newLink);
  }, [to, args]);

  return <Link to={link}>{children}</Link>;
};

export default Navigate;
