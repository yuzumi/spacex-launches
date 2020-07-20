import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const LAUNCH_QUERY = gql`
  query LaunchQuery ($flight_number: Int!) {
    launch (flight_number: $flight_number) {
      flight_number,
      mission_name,
      launch_year,
      launch_success,
      launch_date_local,
      rocket {
        rocket_id,
        rocket_name,
        rocket_type
      }
    }
  }
`;

const Launch = () => {
  const params = useParams();
  const flight_number = parseInt(params.flight_number, 10);

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: {
      flight_number
    }
  });

  return (
    <>
      <h1 className="display-5 my-3">Launch</h1>
      {loading && <h4>Loading...</h4>}
      {error && <p>Error</p>}
      {data && (
        <div>
          <h3 className="display-5 my-3">
            Mission: {data.launch.mission_name}
          </h3>
          <h4 className="mb-3">Launch details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Flight number: {data.launch.flight_number}
            </li>
            <li className="list-group-item">
              Launch year: {data.launch.launch_year}
            </li>
            <li className="list-group-item">
              Launch successful: {data.launch.launch_success ? 'yes' : 'no'}
            </li>
            <li className="list-group-item">
              Flight number: {data.launch.flight_number}
            </li>
          </ul>

          <h4 className="my-3">Rocket Details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Rocket id: {data.launch.rocket.rocket_id}
            </li>
            <li className="list-group-item">
              Rocket name: {data.launch.rocket.rocket_name}
            </li>
            <li className="list-group-item">
              Rocket type: {data.launch.rocket.rocket_type}
            </li>
          </ul>

          <Link className="btn btn-secondary" to="/">Back</Link>
        </div>
      )}
    </>
  );
};

export default Launch;
