import React from 'react';
import PropTypes from 'prop-types';
import PageRenderer from '../PageRenderer';
import query from '../../graphql/queries/titlepage.gql';

import './cssExample.css';

export default function TitleLayout({ pathname }) {
  return (
    <PageRenderer query={query} pathname={pathname}>
      {({ pageData: { title, body, fieldImage } }) => {
        return (
          <div className="wrapper">
            A TitleLayout template example
            <h1 className="title">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: body.value }} />
            <img
              src={fieldImage.url}
              height={fieldImage.height}
              width={fieldImage.width}
              alt={fieldImage.alt}
            />
          </div>
        );
      }}
    </PageRenderer>
  );
}

TitleLayout.propTypes = {
  pathname: PropTypes.string
};

TitleLayout.defaultProps = {
  pathname: ''
};
