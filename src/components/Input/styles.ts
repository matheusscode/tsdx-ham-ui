import styled, { css } from 'styled-components';

interface InputProps {
  isFocused?: boolean;
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
}

export const InputContainer = styled.input<InputProps>`
  font-family: sans-serif;
  font-weight: 500;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  outline: none;
  background-color: transparent;
  width: 100%;
  transition: all 0.4s ease;
  border-radius: 8px;
  border: 2px solid #cccccc65;
  color: #8592a6;

  &:focus {
    border-color: #0051ff;
    background-color: #ffffff;
  }

  ${(props: InputProps) =>
    props.variant === 'outline' &&
    css`
      border: 2px solid #cccccc65;
      background-color: #ffffff;
    `}

  ${(props: InputProps) =>
    props.variant === 'filled' &&
    css`
      background-color: #cccccc65;
      border: 2px solid #cccccc65;
    `}

  ${(props: InputProps) =>
    props.variant === 'flushed' &&
    css`
      border-radius: 0;
      border: none;
      border-bottom: 2px solid #cccccc65;
    `}

  ${(props: InputProps) =>
    props.variant === 'unstyled' &&
    css`
      border: none;
      border-bottom: none;
    `}
`;

export const GroupContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  width: 100%;
  position: relative;
`;

export const LabelContainer = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #5a5f68;
  text-align: left;
  padding: 0.7rem 0.2rem;
  font-family: sans-serif;
`;
