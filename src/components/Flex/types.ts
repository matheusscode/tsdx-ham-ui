import { ReactNode, CSSProperties } from 'react';
import { ExtendedCSSProperties } from '../../utils/useInteractiveStyles';

export interface FlexProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
}
