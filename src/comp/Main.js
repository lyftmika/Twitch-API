import React from 'react';

class Main extends React.Component {

  render () {
    const data = this.props.response.data;
    return (
      <div className="main-container">
        <img src={data.video_banner} alt=""/>
      </div>
    );
  }
}

export default Main;