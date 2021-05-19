import styled from 'styled-components';

export const Fin = styled.div`
  bottom: 0;
  left: 0;
  opacity: ${props => (props.startHidden ? 0 : 1)};
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.15s linear;

  ::before,
  ::after {
    background: ${props => props.theme.colors.white};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  ::before {
    transform: skewX(-20deg);
    left: 20px;
  }

  ::after {
    left: 0;
  }
`;
