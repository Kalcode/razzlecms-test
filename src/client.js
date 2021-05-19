// Client Polyfills
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support

// @ts-ignore
import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';

import ClientApp from './components/App/ClientApp';

loadableReady(() => {
  hydrate(<ClientApp />, document.getElementById('root'));
});

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
