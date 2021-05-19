/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';

import query from '../../graphql/queries/homepage.gql';
import PageRenderer from '../../components/PageRenderer';
import PageHelmet from '../../components/Helmets/PageHelmet';
import config from '../../config';
import FullPageBanner from '../../components/Banner/FullPageBanner';
import Stats from '../../components/Stats';

export default function Home() {
  return (
    <PageRenderer query={query} pathname="/">
      {({ data, pageData }) => {
        const {
          body,
          fieldImageBanner,
          fieldStats,
          fieldTextBanner
        } = pageData;

        const { servicesMenu } = data;

        return (
          <div>
            <Helmet>
              <meta charSet="utf-8" />
              <title>My Title</title>
              <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <PageHelmet title={config.site_name} />
            <FullPageBanner
              image={fieldImageBanner}
              text={fieldTextBanner.value}
              title={body.value}
              links={servicesMenu.links.map(({ label, url }) => ({
                label,
                url: url.path
              }))}
            />
            <Stats
              stats={fieldStats.map(({ entity }) => ({
                title: entity.title,
                body: entity.fieldDescription
              }))}
            />
          </div>
        );
      }}
    </PageRenderer>
  );
}
