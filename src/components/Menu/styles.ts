import styled, { css } from 'styled-components';

interface MenuListProps {
  forPosition?: 'left' | 'right' | 'center';
  isOpen?: boolean;
}

export const MenuContainer = styled.nav`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: right;
`;

export const MenuButtonContainer = styled.button`
  display: flex;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 0.6rem 1rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.16);
  color: #575656;
  background-color: #f5f5f5;
  font-size: 0.9rem;
  justify-content: center;
  text-align: center;
`;

export const MenuListContainer = styled.ul<MenuListProps>`
  display: flex;
  position: absolute;
  top: ${(props: any) => (props.isOpen ? '130%' : '180%')};
  background-color: #ffffff;
  opacity: ${(props: any) => (props.isOpen ? 1 : 0)};
  min-width: 200px;
  width: 100%;
  transition: opacity 0.4s ease, top 0.4s ease;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  list-style-type: none;
  padding: 0.8rem;
  border-radius: 10px;
  flex-direction: column;
  z-index: ${(props: any) => (props.isOpen ? 1000 : -2)};

  ${(props: any) =>
    props.forPosition === 'left' &&
    css`
      left: 0;
    `}

  ${(props: any) =>
    props.forPosition === 'right' &&
    css`
      right: 0;
    `}

  ${(props: any) =>
    props.forPosition === 'center' &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}
`;

export const MenuItemContainer = styled.li`
  display: flex;
  padding: 0.6rem 0.8rem;
  justify-content: left;
  transition: all 0.4s ease;
  background-color: #ffffff;
`;

export const MenuDividerContainer = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c0c0c07b;
  margin: 0.6rem 0;
`;
