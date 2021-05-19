import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import BaseHelmet from '../Helmets/BaseHelmet';
import Nav from '../Nav';
import GlobalStyle from '../../GlobalStyle';
import theme from '../../Theme';

export default function AppLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <BaseHelmet />
        <Nav />
        {children}
      </Fragment>
    </ThemeProvider>
  );
}

AppLayout.propTypes = {
  children: PropTypes.any
};

AppLayout.defaultProps = {
  children: null
};
