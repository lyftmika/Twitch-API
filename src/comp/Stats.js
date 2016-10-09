import React from 'react';


class Stats extends React.Component {
  render () {
    var data = this.props.response.data;
    return (
      <div className="stats-container">
        <div className="stat-block">{data.followers} Followers</div>
        <div className="stat-block">{data.views} Views</div>
        <div className="stat-block"></div>
      </div>
    );
  }
}

export default Stats;