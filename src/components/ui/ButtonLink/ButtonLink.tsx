import React from "react";
import styles from "./ButtonLink.module.scss";
import classNames from "classnames";
import Link from "next/link";

interface IButtonLink extends React.ComponentPropsWithoutRef<typeof Link> {
  variant: "primary" | "secondary";
  size: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const ButtonLink: React.FC<IButtonLink> = ({
  variant,
  size,
  fullWidth = false,
  children,
  ...props
}) => {
  const getButtonHeight = () => {
    switch (size) {
      case "lg": {
        return "40px";
      }
      case "md": {
        return "32px";
      }
      case "sm": {
        return "28px";
      }
      case "xs": {
        return "24px";
      }
      default: {
        return "auto";
      }
    }
  };

  const getInlinePadding = () => {
    switch (size) {
      case "lg": {
        return "20px";
      }
      case "md": {
        return "14px";
      }
      case "sm": {
        return "12px";
      }
      case "xs": {
        return "12px";
      }
      default: {
        return "auto";
      }
    }
  };

  return (
    <Link
      {...props}
      style={{
        height: getButtonHeight(),
        width: fullWidth ? "100%" : "fit-content",
        paddingInline: getInlinePadding(),
      }}
      className={classNames(styles.button, {
        [styles.primaryButton]: variant === "primary",
        [styles.secondaryButton]: variant === "secondary",
      })}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
