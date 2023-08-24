import React, { useEffect } from 'react';
import { useInteractiveStyles } from '../../utils/useInteractiveStyles';
import {
  BodyContainer,
  CloseButtonContainer,
  ContentContainer,
  FooterContainer,
  HeaderContainer,
  ModalContainer,
  OverlayContainer,
} from './styles';
import {
  ModalCloseButtonProps,
  ModalFunctionalyProps,
  ModalOverlayProps,
  ModalProps,
} from './types';

export const Modal = ({ children, isOpen, ...rest }: ModalFunctionalyProps) => {
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
    <ModalContainer
      isOpen={isOpen}
      style={combinedStyles}
      {...rest}
      {...eventHandlers}
    >
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </ModalContainer>
  );
};

export const ModalOverlay = ({ onClose, ...rest }: ModalOverlayProps) => {
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
};

export const ModalContent = ({
  children,
  isOpen,
  ...rest
}: ModalFunctionalyProps) => {
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
};

export const ModalHeader = ({ children, ...rest }: ModalProps) => {
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
      <div style={beforeStyles}></div>
      {children}
      <div style={afterStyles} />
    </HeaderContainer>
  );
};

export const ModalBody = ({ children, ...rest }: ModalProps) => {
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
      <div style={beforeStyles}></div>
      {children}
      <div style={afterStyles} />
    </BodyContainer>
  );
};

export const ModalFooter = ({ children, ...rest }: ModalProps) => {
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
      <div style={beforeStyles}></div>
      {children}
      <div style={afterStyles} />
    </FooterContainer>
  );
};

export const ModalCloseButton = ({
  children,
  onClose,
  ...rest
}: ModalCloseButtonProps) => {
  const [combinedStyles, { eventHandlers }] = useInteractiveStyles({
    baseStyles: rest,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <CloseButtonContainer
      onClose={onClose}
      onClick={onClose}
      style={combinedStyles}
      {...rest}
      {...eventHandlers}
    >
      X
    </CloseButtonContainer>
  );
};
