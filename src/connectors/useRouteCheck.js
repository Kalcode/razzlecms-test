import { useQuery } from 'react-apollo';
import routeCheck from '../graphql/queries/routeCheck.gql';

/**
 * @export
 * @param {Location} location
 */

export function useRouteCheck(location) {
  const { called, data, error, loading } = useQuery(routeCheck, {
    variables: {
      uid: location.pathname
    }
  });

  const routeData = data && data.route ? data.route : undefined;

  return {
    data: routeData,
    error,
    loading: !called || loading,
    pageType: routeData ? routeData.nodeContext.entityBundle : undefined
  };
}
