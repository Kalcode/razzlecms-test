import React from 'react';
import PropTypes from 'prop-types';
import PageRenderer from '../PageRenderer';
import query from '../../graphql/queries/page.gql';

export default function Blog({ pathname }) {
  return (
    <PageRenderer query={query} pathname={pathname}>
      {() => {
        return <div>A blogging template example</div>;
      }}
    </PageRenderer>
  );
}

Blog.propTypes = {
  pathname: PropTypes.string
};

Blog.defaultProps = {
  pathname: ''
};
