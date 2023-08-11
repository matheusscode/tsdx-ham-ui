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
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({ children, as = "h1", ...rest }: ComponenteProps) => {
  const baseStylesWithDefault: CSSProperties = {
    fontFamily: "sans-serif",
    fontWeight: 600,
    ...rest,
  };

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: baseStylesWithDefault,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  const CustomHeading = as;

  return (
    <CustomHeading style={combinedStyles} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </CustomHeading>
  );
};

export default Heading;
