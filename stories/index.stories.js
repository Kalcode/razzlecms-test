import React from 'react';
import { storiesOf } from '@storybook/react';

import App from '../src/components/App/ClientApp';
import StoryRouter from './StoryRouter';
import StoryApollo from './StoryApollo';

storiesOf('App', module)
  .addDecorator(StoryRouter)
  .addDecorator(StoryApollo)
  .add('default', () => {
    return <App />;
  });
