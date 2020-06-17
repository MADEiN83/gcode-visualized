import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { IAlignment, ISize } from "core/interfaces.config";

interface IProps {
  children?: any;
  hideContent?: boolean;
  textAlign?: IAlignment;
  size?: ISize;
}

const DEFAULT_CHILDREN = "Chargement en cours...";
const DEFAULT_HIDE_CONTENT = false;
const DEFAULT_TEXT_ALIGN: IAlignment = "left";
const DEFAULT_SIZE: ISize = "md";

const Loading: React.FC<IProps> = (props: IProps) => {
  const {
    children = DEFAULT_CHILDREN,
    hideContent = DEFAULT_HIDE_CONTENT,
    textAlign = DEFAULT_TEXT_ALIGN,
    size = DEFAULT_SIZE,
  } = props;
  const className = `loading-container loading-${textAlign} loading-${size}`;

  return (
    <div className={className}>
      <FontAwesomeIcon icon={faSpinner} pulse />
      &nbsp;
      {!hideContent && children}
    </div>
  );
};

export default Loading;
