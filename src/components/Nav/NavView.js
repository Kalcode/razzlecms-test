import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  NavWrapper,
  FixedMenuStyle,
  ListItem,
  UnorderedList,
  Logo
} from './styles';
import logo from './cms-logo.png';
import { Fin } from '../Styles/Fin';

export default function NavView({ links }) {
  return (
    <NavWrapper>
      <FixedMenuStyle>
        <Logo src={logo} />
        <UnorderedList>
          <ListItem>
            <Fin startHidden />
            <Link to="/">Home</Link>
          </ListItem>
          {links.map(link => (
            <ListItem key={link.url.path}>
              <Fin startHidden />
              <Link to={link.url.path}>{link.label}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      </FixedMenuStyle>
    </NavWrapper>
  );
}

NavView.propTypes = {
  links: PropTypes.array
};

NavView.defaultProps = {
  links: []
};
