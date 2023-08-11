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
}

export const Text = ({ children, ...rest }: ComponenteProps) => {
  const baseStylesWithDefault = {
    fontSize: "1.1rem",
    fontFamily: "sans-serif",
    fontWeight: 500,
    lineHeight: "28px",
    ...rest,
  };

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: baseStylesWithDefault,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  return (
    <span style={combinedStyles} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </span>
  );
};

export default Text;
