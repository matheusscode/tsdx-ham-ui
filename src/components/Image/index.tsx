import React, { CSSProperties } from "react";
import {
  useInteractiveStyles,
  ExtendedCSSProperties,
} from "../../utils/useInteractiveStyles";

interface ComponenteProps extends ExtendedCSSProperties {
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
  src?: string;
  alt?: string;
}

export const Image = ({ src, alt, ...rest }: ComponenteProps) => {
  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: rest,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  return (
    <>
      <div style={beforeStyles} />
      <img src={src} alt={alt} style={combinedStyles} {...eventHandlers} />
      <div style={afterStyles} />
    </>
  );
};

export default Image;
