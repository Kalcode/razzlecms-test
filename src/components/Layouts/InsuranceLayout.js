import React from 'react';
import PageRenderer from '../PageRenderer';
import query from '../../graphql/queries/insurancePage.gql';

export default function InsuranceLayout({ pathname }) {
  return (
    <PageRenderer query={query} pathname={pathname}>
      {({ pageData }) => {
        return <div style={{ marginTop: 200 }}>{pageData.title}</div>;
      }}
    </PageRenderer>
  );
}
