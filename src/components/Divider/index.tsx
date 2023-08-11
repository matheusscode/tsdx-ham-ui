import React, { ReactNode, CSSProperties } from "react";
import {
  useInteractiveStyles,
  ExtendedCSSProperties,
} from "../../utils/useInteractiveStyles";

interface ComponenteProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
  orientation?: "horizontal" | "vertical";
}

export const Divider = ({
  children,
  orientation = "horizontal",
  ...rest
}: ComponenteProps) => {
  const baseStylesWithDefault = {
    display: "flex",
    width: orientation === "horizontal" ? "100%" : "1px",
    height: orientation === "horizontal" ? "1px" : "100%",
    backgroundColor: "#9b9b9b7a",
    margin: orientation === "horizontal" ? "1rem 0" : "0 1rem",
    ...rest,
  };

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: baseStylesWithDefault,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  return (
    <div style={combinedStyles} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </div>
  );
};

export default Divider;
