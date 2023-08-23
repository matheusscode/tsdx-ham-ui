import React from 'react';
import { useInteractiveStyles } from '../../utils/useInteractiveStyles';
import { BoxProps } from './types';

export const Box = ({ children, ...rest }: BoxProps) => {
  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
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
