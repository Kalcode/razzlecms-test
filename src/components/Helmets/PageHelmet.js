import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import config from '../../config';

/**
 * @export
 * @param {Object} props
 * @param {Array} props.customOgs
 * @param {string} props.description
 * @param {string} props.imageAlt
 * @param {string} props.imageUrl
 * @param {string} props.imageHeight
 * @param {string} props.imageWidth
 * @param {string} props.title
 * @param {string} props.type
 * @param {string} props.url
 *
 * @returns
 */
export default function PageHelmet({
  customOgs = [],
  description,
  imageAlt,
  imageUrl,
  imageHeight,
  imageWidth,
  title,
  type,
  url
}) {
  const { pathname } = useLocation();

  if (!Array.isArray(customOgs)) {
    throw new Error(
      'customOgs should be an array shaped: { property: String, content: any }'
    );
  }

  const customOgsTags = customOgs.map(({ content, property }) => (
    <meta property={property} content={content} />
  ));

  return (
    <Helmet>
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {type && <meta property="og:type" content={type} />}
      {url && <meta property="og:url" content={url} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageHeight && <meta property="og:image:height" content={imageHeight} />}
      {imageWidth && <meta property="og:image:width" content={imageWidth} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      {customOgsTags}
      <meta property="og:site_name" content={config.site_name} />
      <link rel="canonical" href={`${config.site_url}${pathname}`} />
      <title>{title}</title>
    </Helmet>
  );
}

PageHelmet.propTypes = {
  customOgs: PropTypes.array,
  description: PropTypes.string,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string
};

PageHelmet.defaultProps = {
  customOgs: [],
  description: '',
  imageAlt: '',
  imageUrl: '',
  imageHeight: '',
  imageWidth: '',
  title: '',
  type: '',
  url: ''
};
