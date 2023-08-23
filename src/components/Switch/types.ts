import { ReactNode, CSSProperties } from 'react';
import { ExtendedCSSProperties } from '../../utils/useInteractiveStyles';

export interface SwitchProps extends ExtendedCSSProperties {
  children?: ReactNode;
  _before?: CSSProperties & { _hover?: CSSProperties };
  _after?: CSSProperties & { _hover?: CSSProperties };
  _active?: CSSProperties;
  onToggle?: (isChecked: boolean) => void;
  defaultChecked?: boolean;
  switchSize?: 'sm' | 'md' | 'lg' | 'xl';
  colorScheme?: string;
}
