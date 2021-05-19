import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

import PageLayoutSelector from '../../components/PageLayoutSelector';
import { useRouteCheck } from '../../connectors';
import { PageLoading } from '../../components/Loaders';

const PageNotFound = loadable(() => import('../../components/PageNotFound'));

export default function FallbackPage({ location }) {
  const { error, data, loading, pageType } = useRouteCheck(location);

  if (error || (!loading && !data)) {
    return <PageNotFound />;
  }

  if (!loading && !error && data && pageType) {
    return (
      <PageLayoutSelector pathname={location.pathname} pageType={pageType} />
    );
  }

  return <PageLoading />;
}

FallbackPage.propTypes = {
  location: PropTypes.object.isRequired
};
