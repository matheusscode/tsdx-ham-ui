import React, { ReactNode, CSSProperties } from 'react';
import {
  ExtendedCSSProperties,
  useInteractiveStyles,
} from '../../utils/useInteractiveStyles';

interface ModalProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

interface ModalCProps extends ExtendedCSSProperties {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

interface ModalOverlayProps extends ExtendedCSSProperties {
  onClose?: () => void;
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

interface ModalCloseButtonProps extends ExtendedCSSProperties {
  onClose?: () => void;
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

export function Modal({ children, isOpen, ...rest }: ModalCProps) {
  const baseStylesWithDefault: CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' : 'hidden',
    transition: 'all 0.2s ease',
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
    <div
      style={combinedStyles}
      {...rest}
      {...eventHandlers}
      className={`modal ${isOpen ? 'open' : ' '}`}
    >
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </div>
  );
}

export function ModalOverlay({ onClose, ...rest }: ModalOverlayProps) {
  const baseStylesWithDefault: CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 2,
    position: 'absolute',
    width: '100vw',
    height: '100vh',
  };

  const [combinedStyles, { eventHandlers }] = useInteractiveStyles({
    baseStyles: baseStylesWithDefault,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <div
      onClick={onClose}
      style={combinedStyles}
      {...rest}
      {...eventHandlers}
    />
  );
}

export function ModalContent({ children, isOpen, ...rest }: ModalCProps) {
  const baseStylesWithDefault: CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'inherit',
    justifyContent: 'space-between',
    zIndex: 3,
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    maxWidth: '400px',
    width: '100%',
    margin: '0 1rem',
    maxHeight: '500px',
    height: '100%',
    transition: 'all 0.6s ease',
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' : 'hidden',
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
    <div style={combinedStyles} {...rest} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </div>
  );
}

export function ModalHeader({ children, ...rest }: ModalProps) {
  const baseStylesWithDefault = {
    display: 'flex',
    padding: '2rem 1rem',
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
    <div style={combinedStyles} {...rest} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </div>
  );
}

export function ModalBody({ children, ...rest }: ModalProps) {
  const baseStylesWithDefault: CSSProperties = {
    display: 'flex',
    padding: '0 2rem',
    height: '100%',
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
    <div style={combinedStyles} {...rest} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </div>
  );
}

export function ModalFooter({ children, ...rest }: ModalProps) {
  const baseStylesWithDefault = {
    display: 'flex',
    padding: '2rem 1rem',
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
    <div style={combinedStyles} {...rest} {...eventHandlers}>
      <div style={beforeStyles} />
      {children}
      <div style={afterStyles} />
    </div>
  );
}

export function ModalCloseButton({
  children,
  onClose,
  ...rest
}: ModalCloseButtonProps) {
  const baseStylesWithDefault: CSSProperties = {
    position: 'absolute',
    top: '20px',
    cursor: 'pointer',
    right: '20px',
  };

  const [combinedStyles, { eventHandlers }] = useInteractiveStyles({
    baseStyles: baseStylesWithDefault,
    beforeStyles: rest._before,
    afterStyles: rest._after,
  });

  return (
    <button
      onClick={onClose}
      style={combinedStyles}
      {...rest}
      {...eventHandlers}
    >
      X
    </button>
  );
}
