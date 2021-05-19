import styled from 'styled-components';
import { Fin } from '../Styles/Fin';

export const NavWrapper = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 3em;
  padding: 20px;
  padding: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.25);
`;

export const FixedMenuStyle = styled.div`
  align-items: center;
  background-color: transparent;
  border: none;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  display: flex;
  height: 100%;
  justify-content: space-between;
  max-width: 2050px;
  margin: auto;
  width: 100%;
`;

export const UnorderedList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  background: transparent;
  font-size: 0.85em;
  font-weight: 600;
  padding: 20px;
  margin-right: calc(0.5em + 4vw);
  text-transform: uppercase;
  position: relative;
  z-index: 0;

  :hover {
    ${Fin} {
      opacity: 1;
    }

    a {
      color: ${props => props.theme.colors.primary};
    }
  }

  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    transition: color 0.15s ease-in;
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  height: 100%;
`;
