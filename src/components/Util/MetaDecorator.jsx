import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const metaDecorator = require('../data/json/metaDecorator.json');

const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="title" property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta name="description" property="og:description" content={description} />
    <meta name="image" property="og:image" content={metaDecorator.hostname + imageUrl} />
    <meta property="og:url" content={metaDecorator.hostname + window.location.pathname + window.location.search} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content={imageAlt} />
    <meta name="author" content={metaDecorator.author} />
  </Helmet>
);

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default MetaDecorator;
