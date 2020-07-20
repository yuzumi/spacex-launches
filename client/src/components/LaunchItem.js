import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import classnames from 'classnames';

const LaunchItem = ({ launch }) => (
  <div className="card card-body mb-3">
    <div className="row">
      <div className="col-md-9">
        <h4>
          Mission:
          {` `} 
          <span 
            className={classnames({ 
              'text-success': launch.launch_success,
              'text-danger': !launch.launch_success 
            })}
          >
            {launch.mission_name}
          </span>
        </h4>
        <p>
          Date: 
          {` `}
          <Moment format="YYYY-MM-DD HH:mm">{launch.launch_date_local}</Moment>
        </p>
      </div>
      <div className="col-md-3">
        <Link 
          className="btn btn-secondary" 
          to={`/launch/${launch.flight_number}`}
        >
          Details
        </Link>
      </div>
    </div>
  </div>
);

export default LaunchItem;
