import styled from 'styled-components';

export const BannerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  max-height: 950px;
  min-height: 780px;
  position: relative;
  width: 100%;
  z-index: 0;
`;

export const Banner = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

export const BannerImage = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
  z-index: -1;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 0;
`;

export const TextContainer = styled.div`
  color: ${props => props.theme.colors.white};
  margin: 20px;
  max-width: 750px;
  z-index: 1;

  h2 {
    font-size: 0.95em;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.75em;
    font-weight: 400;
  }
`;
