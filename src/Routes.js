import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getLoadablePage } from './helpers/getLoadablePage';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={getLoadablePage('HomePage')} />
      <Route path="*" component={getLoadablePage('FallbackPage')} />
    </Switch>
  );
}
