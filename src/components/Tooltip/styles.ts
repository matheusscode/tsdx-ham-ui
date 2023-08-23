import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover .tooltip-content {
    visibility: visible;
  }
`;

export const TooltipContent = styled.div`
  position: absolute;
  padding: 0.4rem;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  visibility: hidden;
  font-size: 1rem;
  z-index: 1;
  min-width: 80px;
  width: 100%;
`;

export const TooltipTop = styled.div`
  ${TooltipContent} {
    bottom: 180%;
    left: 50%;
    transform: translateX(-50%);
  }

  ${TooltipContent}::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    z-index: 2;
    bottom: -8px;
    left: 40%;
    border-width: 8px 8px 0;
    border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
  }
`;

export const TooltipBottom = styled.div`
  ${TooltipContent} {
    top: 180%;
    left: 50%;
    transform: translateX(-50%);
  }

  ${TooltipContent}::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    z-index: 2;
    top: -8px;
    left: 40%;
    border-width: 0 8px 8px;
    border-color: transparent transparent rgba(0, 0, 0, 0.8) transparent;
  }
`;

export const TooltipLeft = styled.div`
  ${TooltipContent} {
    top: 50%;
    right: 120%;
    transform: translateY(-50%);
  }

  ${TooltipContent}::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    z-index: 2;
    top: 26%;
    right: -8px;
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.8);
  }
`;
