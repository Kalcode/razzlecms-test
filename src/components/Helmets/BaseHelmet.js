import React from 'react';
import { Helmet } from 'react-helmet';

import config from '../../config';

export default function BaseHelmet() {
  return (
    <Helmet>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={config.site_description} />
      <title>{config.site_name}</title>
    </Helmet>
  );
}
