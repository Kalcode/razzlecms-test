import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { useQuery } from 'react-apollo';

import config from '../../config';
import { PageLoading } from '../Loaders';

export default function PageRenderer({
  children,
  deferLoading,
  pathname,
  query
}) {
  const { called, data, error, loading } = useQuery(query, {
    variables: {
      uid: pathname
    }
  });

  const pageData = get(data, config.query_page_key);

  if (!loading && called && pageData) {
    return children({ data, loading: false, pageData });
  }

  if (error) {
    return error.message;
  }

  if (deferLoading) {
    return children({ loading: true, data: null, pageData: null });
  }

  return <PageLoading />;
}

PageRenderer.propTypes = {
  children: PropTypes.func.isRequired,
  deferLoading: PropTypes.bool,
  pathname: PropTypes.string.isRequired,
  query: PropTypes.object.isRequired
};

PageRenderer.defaultProps = {
  deferLoading: false
};
