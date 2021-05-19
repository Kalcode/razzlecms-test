import loadable from '@loadable/component';

export function getLoadablePage(page) {
  return loadable(/* webpackPrefetch: true */ () => import(`../pages/${page}`));
}
