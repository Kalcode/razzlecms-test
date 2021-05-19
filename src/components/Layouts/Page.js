import React from 'react';
import PropTypes from 'prop-types';

import PageRenderer from '../PageRenderer';
import query from '../../graphql/queries/page.gql';
import PageHelmet from '../Helmets/PageHelmet';

export default function Page({ pathname }) {
  return (
    <PageRenderer query={query} pathname={pathname}>
      {({ pageData }) => {
        const description =
          pageData.body.value.length > 120
            ? `${pageData.body.value.slice(0, 117)}...`
            : pageData.body.value;

        return (
          <div>
            <PageHelmet title={pageData.title} description={description} />
            <h2>{pageData.title}</h2>
            <h3>{pageData.fieldTextBanner.value}</h3>
            <div dangerouslySetInnerHTML={{ __html: pageData.body.value }} />
          </div>
        );
      }}
    </PageRenderer>
  );
}

Page.propTypes = {
  pathname: PropTypes.string
};

Page.defaultProps = {
  pathname: ''
};
