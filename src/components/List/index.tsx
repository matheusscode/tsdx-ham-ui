import React, { CSSProperties, ReactNode } from "react";
import {
  useInteractiveStyles,
  ExtendedCSSProperties,
} from "../../utils/useInteractiveStyles";

interface ListProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

export const ListItem = ({ children, ...rest }: ListProps) => {
  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: rest,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  return (
    <li style={combinedStyles} {...rest} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </li>
  );
};

export const OrderedList = ({ children, ...rest }: ListProps) => {
  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: rest,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  return (
    <ol style={combinedStyles} {...rest} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </ol>
  );
};

export const UnordererdList = ({ children, ...rest }: ListProps) => {
  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: rest,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  return (
    <ul style={combinedStyles} {...rest} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </ul>
  );
};

export const List = ({ children, ...rest }: ListProps) => {
  const baseStylesWithDefault: CSSProperties = {
    listStyleType: "none",
    ...rest,
  };

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
      baseStyles: baseStylesWithDefault,
      beforeStyles: rest._before,
      afterStyles: rest._after,
    });

  return (
    <ul style={combinedStyles} {...rest} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </ul>
  );
};
