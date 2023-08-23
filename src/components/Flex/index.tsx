import React from 'react';
import { useInteractiveStyles } from '../../utils/useInteractiveStyles';
import { FlexProps } from './types';
import { CustomDiv } from './styles';

export const Flex = ({ children, ...rest }: FlexProps) => {
  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <CustomDiv style={combinedStyles} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </CustomDiv>
  );
};

export default Flex;
