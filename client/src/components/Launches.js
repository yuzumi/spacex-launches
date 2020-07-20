import React from 'react';
import { gql, useQuery } from '@apollo/client';

import LaunchItem from 'components/LaunchItem';
import MissionKey from 'components/MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number,
      mission_name,
      launch_date_local,
      launch_success
    }
  }  
`;

const renderLaunchItem = Component => launch => (
  <Component 
    key={launch.flight_number} 
    launch={launch} 
  />
);

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  const launches = data?.launches ?? [];

  return (
    <div>
      <h1 className="display-5 my-3">Launches</h1>
      <MissionKey />
      {loading && <h4>Loading...</h4>}
      {error && <p>Error</p>}
      {launches.map(renderLaunchItem(LaunchItem))}
    </div>
  );
};

export default Launches;
