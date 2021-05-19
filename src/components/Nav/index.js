import React from 'react';
import { useQuery } from 'react-apollo';
import NavView from './NavView';

import query from '../../graphql/queries/navBar.gql';

export default function Nav() {
  const { data } = useQuery(query);

  const navBarLinks = data
    ? data.menuByName.links.filter(link => link.url.path !== '/')
    : [];

  return <NavView links={navBarLinks} />;
}
