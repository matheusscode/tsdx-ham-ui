import React, { useEffect } from 'react';
import { useInteractiveStyles } from '../../utils/useInteractiveStyles';
import {
  DrawerPropsFunctionalyProps,
  DrawerCloseButtonProps,
  DrawerOverlayProps,
  DrawerProps,
} from './types';
import {
  BodyContainer,
  CloseButtonContainer,
  ContentContainer,
  FooterContainer,
  HeaderContainer,
  DrawerContainer,
  OverlayContainer,
} from './styles';

export function Drawer({
  children,
  isOpen,
  ...rest
}: DrawerPropsFunctionalyProps) {
  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <DrawerContainer
      isOpen={isOpen}
      style={combinedStyles}
      {...rest}
      {...eventHandlers}
    >
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </DrawerContainer>
  );
}

export function DrawerOverlay({ onClose, ...rest }: DrawerOverlayProps) {
  const [combinedStyles, { eventHandlers }] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <OverlayContainer
      onClick={onClose}
      style={combinedStyles}
      {...rest}
      {...eventHandlers}
    />
  );
}

export function DrawerContent({
  children,
  isOpen,
  ...rest
}: DrawerPropsFunctionalyProps) {
  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <ContentContainer
      isOpen={isOpen}
      style={combinedStyles}
      {...rest}
      {...eventHandlers}
    >
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </ContentContainer>
  );
}

export function DrawerHeader({ children, ...rest }: DrawerProps) {
  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <HeaderContainer style={combinedStyles} {...rest} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </HeaderContainer>
  );
}

export function DrawerBody({ children, ...rest }: DrawerProps) {
  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <BodyContainer style={combinedStyles} {...rest} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </BodyContainer>
  );
}

export function DrawerFooter({ children, ...rest }: DrawerProps) {
  const [
    combinedStyles,
    { beforeStyles, afterStyles, eventHandlers },
  ] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <FooterContainer style={combinedStyles} {...rest} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </FooterContainer>
  );
}

export function DrawerCloseButton({
  children,
  onClose,
  ...rest
}: DrawerCloseButtonProps) {
  const [combinedStyles, { eventHandlers }] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <CloseButtonContainer
      onClick={onClose}
      style={combinedStyles}
      {...rest}
      {...eventHandlers}
    >
      X
    </CloseButtonContainer>
  );
}
