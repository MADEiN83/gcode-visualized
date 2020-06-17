import React from "react";
import { Helmet } from "react-helmet";

interface IProps {
  meta?: IMetaArgs;
}

export interface IMetaArgs {
  title?: string;
  description?: string;
}

const Meta: React.FC<IProps> = (props: IProps) => {
  const { meta } = props;

  if (!meta) {
    return <></>;
  }

  const { title, description } = meta;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default Meta;
