import React, { ReactNode, CSSProperties } from 'react';
import {
  useInteractiveStyles,
  ExtendedCSSProperties,
} from '../../utils/useInteractiveStyles';
import {
  CardContainer,
  CardHeaderContainer,
  CardBodyContainer,
  CardFooterContainer,
} from './styles';

interface CardProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

export const Card = ({ children, ...rest }: CardProps) => {
  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <CardContainer style={combinedStyles} {...eventHandlers}>
      {' '}
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </CardContainer>
  );
};
export const CardHeader = ({ children, ...rest }: CardProps) => {
  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <CardHeaderContainer style={combinedStyles} {...eventHandlers}>
      {' '}
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </CardHeaderContainer>
  );
};

export const CardBody = ({ children, ...rest }: CardProps) => {
  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <CardBodyContainer style={combinedStyles} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </CardBodyContainer>
  );
};

export const CardFooter = ({ children, ...rest }: CardProps) => {
  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <CardFooterContainer style={combinedStyles} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </CardFooterContainer>
  );
};
