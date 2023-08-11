import React, { ReactNode, CSSProperties } from "react";
import {
  useInteractiveStyles,
  ExtendedCSSProperties,
} from "../../utils/useInteractiveStyles";

interface CardProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

export const Card = ({ children, ...rest }: CardProps) => {
  const baseStylesWithDefault: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    boxShadow: "0 0 3px rgba(0,0,0,0.3)",
    width: "100%",
    height: "100%",
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
      {" "}
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </div>
  );
};
export const CardHeader = ({ children, ...rest }: CardProps) => {
  const baseStylesWithDefault: CSSProperties = {
    display: "flex",
    padding: "1rem",
    borderRadius: "10px 10px 0 0",
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
      {" "}
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </div>
  );
};

export const CardBody = ({ children, ...rest }: CardProps) => {
  const baseStylesWithDefault: CSSProperties = {
    display: "flex",
    padding: "1rem",
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

export const CardFooter = ({ children, ...rest }: CardProps) => {
  const baseStylesWithDefault: CSSProperties = {
    display: "flex",
    padding: "1rem",
    borderRadius: "0 0 10px 10px",
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
