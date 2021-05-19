/* eslint-disable import/no-useless-path-segments */
import loadable from '@loadable/component';

const loadableComponents = {
  page: loadable(() => import('./Page')),
  blog: loadable(() => import('./Blog')),
  title_layout: loadable(() => import('./TitleLayout')),
  insurance_layout: loadable(() => import('./InsuranceLayout'))
};

export default loadableComponents;
