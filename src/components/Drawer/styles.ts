import styled from 'styled-components';

interface DrawerProps {
  isOpen: boolean;
}

export const DrawerContainer = styled.div<DrawerProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${(props: DrawerProps) => (props.isOpen ? 2 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  opacity: ${(props: DrawerProps) => (props.isOpen ? 1 : 0)};
  visibility: ${(props: DrawerProps) => (props.isOpen ? 'visible' : 'hidden')};
  transition: all 0.2s ease;
`;

export const OverlayContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div<DrawerProps>`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  z-index: 3;
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  max-width: 400px;
  transition: all 0.4s ease;
  opacity: ${(props: DrawerProps) => (props.isOpen ? 1 : 0)};
  visibility: ${(props: DrawerProps) => (props.isOpen ? 'visible' : 'hidden')};
  transform: ${(props: DrawerProps) =>
    props.isOpen ? 'translateX(0px)' : 'translateX(200px)'};
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding: 1.4rem;
  width: 100%;
  height: auto;
`;

export const BodyContainer = styled.div`
  display: flex;
  padding: 1.4rem;
  width: 100%;
  height: 100%;
  text-align: left;
`;

export const FooterContainer = styled.div`
  display: flex;
  padding: 1.4rem;
  width: 100%;
  height: auto;
`;

export const CloseButtonContainer = styled.button`
  display: flex;
  position: absolute;
  top: 20px;
  cursor: pointer;
  right: 20px;
`;
