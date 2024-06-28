import React from "react";
import styles from "./index.module.css";
import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLButtonElement> & { 
  variant?: "primary";
  disabled?: boolean; 
};

function IconButton(props: Props) {
  const { className = "", variant = "", disabled = false, ...rest } = props; 

  return (
    <button
      {...rest}
      type="button"
      className={clsx(styles.button, className, styles[variant], { [styles.disabled]: disabled })} 
      disabled={disabled} 
    />
  );
}

export default IconButton;
