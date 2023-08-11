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

export const Box = ({ children, ...rest }: ComponenteProps) => {
  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: rest,
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

export default Box;
