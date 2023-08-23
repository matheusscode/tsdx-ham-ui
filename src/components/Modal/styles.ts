import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
}

export const ModalContainer = styled.div<ModalProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  opacity: ${(props: ModalProps) => (props.isOpen ? 1 : 0)};
  visibility: ${(props: ModalProps) => (props.isOpen ? 'visible' : 'hidden')};
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

export const ContentContainer = styled.div<ModalProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: inherit;
  justify-content: space-between;
  z-index: 3;
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  margin: 0 1rem;
  max-height: 500px;
  height: 100%;
  transition: all 0.6s ease;
  opacity: ${(props: ModalProps) => (props.isOpen ? 1 : 0)};
  visibility: ${(props: ModalProps) => (props.isOpen ? 'visible' : 'hidden')};
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding: 2rem 1rem;
`;

export const BodyContainer = styled.div`
  display: flex;
  padding: 0 2rem;
  height: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  padding: 2rem 1rem;
`;

export const CloseButtonContainer = styled.button`
  position: absolute;
  top: 20px;
  cursor: pointer;
  right: 20px;
`;
