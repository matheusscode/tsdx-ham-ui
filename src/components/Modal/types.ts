import { ExtendedCSSProperties } from './../../utils/useInteractiveStyles';
import { ReactNode, CSSProperties } from 'react';

export interface ModalFunctionalyProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
  isOpen?: boolean;
}

export interface ModalProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

export interface ModalOverlayProps extends ExtendedCSSProperties {
  onClose?: () => void;
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}

export interface ModalCloseButtonProps extends ExtendedCSSProperties {
  onClose?: () => void;
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}
