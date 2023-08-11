import React, { ReactNode, CSSProperties } from "react";
import {
  ExtendedCSSProperties,
  useInteractiveStyles,
} from "../../utils/useInteractiveStyles";

interface DrawerProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

interface DrawerCProps extends ExtendedCSSProperties {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

interface DrawerOverlayProps extends ExtendedCSSProperties {
  onClose?: () => void;
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

interface DrawerCloseButtonProps extends ExtendedCSSProperties {
  onClose?: () => void;
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

export function Drawer({ children, isOpen, ...rest }: DrawerCProps) {
  const baseStylesWithDefault: CSSProperties = {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? "visible" : "hidden",
    transition: "all 0.2s ease",
    padding: "0 1rem",
    ...rest,
  };

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
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

export function DrawerOverlay({ onClose, ...rest }: DrawerOverlayProps) {
  const baseStylesWithDefault: CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 2,
    position: "absolute",
    width: "100vw",
    height: "100vh",
    ...rest,
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

export function DrawerContent({ children, isOpen, ...rest }: DrawerCProps) {
  const baseStylesWithDefault: CSSProperties = {
    position: "absolute",
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "inherit",
    justifyContent: "space-between",
    zIndex: 3,
    backgroundColor: "#ffffff",
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
    height: "100%",
    transition: "all 0.4s ease",
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? "visible" : "hidden",
    transform: isOpen ? "translateX(0px)" : "translateX(200px)",
    ...rest,
  };

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
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

export function DrawerHeader({ children, ...rest }: DrawerProps) {
  const baseStylesWithDefault = {
    display: "flex",
    padding: "1.4rem",
    width: "100%",
    height: "auto",
    ...rest,
  };

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
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

export function DrawerBody({ children, ...rest }: DrawerProps) {
  const baseStylesWithDefault: CSSProperties = {
    display: "flex",
    padding: "1.4rem",
    width: "100%",
    height: "auto",
    textAlign: "left",
    ...rest,
  };

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
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

export function DrawerFooter({ children, ...rest }: DrawerProps) {
  const baseStylesWithDefault: CSSProperties = {
    display: "flex",
    padding: "1.4rem",
    width: "100%",
    height: "auto",
    ...rest,
  };

  const [combinedStyles, { beforeStyles, afterStyles, eventHandlers }] =
    useInteractiveStyles({
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

export function DrawerCloseButton({
  children,
  onClose,
  ...rest
}: DrawerCloseButtonProps) {
  const baseStylesWithDefault: CSSProperties = {
    display: "flex",
    position: "absolute",
    top: "20px",
    cursor: "pointer",
    right: "20px",
    ...rest,
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
