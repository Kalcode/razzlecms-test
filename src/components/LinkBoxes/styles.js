import styled from 'styled-components';
import { Link } from 'react-router-dom';

const indexColor = ['primary', 'darkred', 'tomato'];
export const LinkBoxWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  height: 15vh;
  justify-content: flex-end;
  margin-top: 80px;
  min-height: 160px;
  width: 100%;
`;

export const LinkBox = styled.div`
  box-sizing: border-box;
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  padding: 30px;
  position: relative;
  text-align: left;
  width: 30%;
  z-index: 0;

  ::before {
    background: ${props => props.theme.colors[indexColor[props.index]]};
    content: '';
    display: block;
    filter: saturate(0.75);
    height: 100%;
    left: 0;
    opacity: 0.75;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

export const TitleText = styled.div`
  font-size: 1.75em;
`;
export const StyledLink = styled(Link)`
  align-items: center;
  display: flex;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  text-transform: uppercase;

  :hover::after {
    transform: translateX(5px);
  }

  ::after {
    content: ' >';
    display: block;
    position: relative;
    top: -1px;
    margin-left: 10px;
    transition: transform 0.15s ease-in;
  }
`;
