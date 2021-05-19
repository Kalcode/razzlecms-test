import React from 'react';
import Layouts from '../Layouts';
import { PageLoading } from '../Loaders';

export default function PageLayoutSelector({ pathname, pageType }) {
  const Layout = Layouts[pageType];

  if (Layout) {
    return <Layout pathname={pathname} fallback={<PageLoading />} />;
  }

  return 'Layout Not Found';
}
