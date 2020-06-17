import React, { ReactNode } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { IType } from "core/interfaces.config";

interface IProps {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: IType;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const {
    children,
    onClick,
    type = "primary",
    loading = false,
    disabled = false,
  } = props;

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!onClick || !canClick(disabled, loading)) {
      return;
    }

    onClick(e);
  };

  return (
    <button
      className="button"
      onClick={handleOnClick}
      data-loading={loading}
      data-type={type}
      disabled={disabled || loading}
    >
      {loading && (
        <FontAwesomeIcon className="button--icon" icon={faSpinner} spin />
      )}
      {children}
    </button>
  );
};

export default Button;

const canClick = (disabled: boolean, loading: boolean): boolean => {
  return !disabled && !loading;
};
