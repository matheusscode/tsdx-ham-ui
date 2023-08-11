import React, { ReactNode, CSSProperties } from 'react';
import {
  ExtendedCSSProperties,
  useInteractiveStyles,
} from '../../utils/useInteractiveStyles';

interface Flex extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

export const Flex = ({ children, ...rest }: Flex) => {
  const baseStylesWithDefault = {
    display: 'flex',
    ...rest,
  };

  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
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

export default Flex;
