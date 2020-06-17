import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamationTriangle,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { IType } from "core/interfaces.config";

interface IProps {
  children: any;
  type?: IType;
  timeInMs?: number;
  onHide: () => void;
}

const ICONS_MAPPING: { [x: string]: IconDefinition } = {
  primary: faCheck,
  secondary: faCheck,
  danger: faExclamationTriangle,
};

const Notification: React.FC<IProps> = (props: IProps) => {
  const [visible, setVisible] = useState(true);
  const { children, type = "primary", timeInMs = 5000, onHide } = props;

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onHide();
      }, 300);
    }, timeInMs);
  }, [onHide, timeInMs]);

  return (
    <div className="notification" data-visible={visible} data-type={type}>
      <FontAwesomeIcon
        className="notification--icon"
        icon={ICONS_MAPPING[type]}
      />
      {children}
    </div>
  );
};

export default Notification;
