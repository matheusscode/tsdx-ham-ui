import { ReactNode, CSSProperties } from 'react';
import { ExtendedCSSProperties } from '../../utils/useInteractiveStyles';

export interface DrawerProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

export interface DrawerPropsFunctionalyProps extends ExtendedCSSProperties {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

export interface DrawerOverlayProps extends ExtendedCSSProperties {
  onClose?: () => void;
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

export interface DrawerCloseButtonProps extends ExtendedCSSProperties {
  onClose?: () => void;
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}
