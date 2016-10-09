import React from 'react';

class Title extends React.Component {

  render () {
    console.log(this.props);
    const data = this.props.response.data;
    return (
      <div className="title-container">
        <div className="title-name">{data.display_name} - {data.status}</div>
        <div className="title-playing">playing: {data.game || "Offline"} </div>
      </div>
    );
  }
}

export default Title;