import React from 'react';

class Follows extends React.Component {

  render () {
    return (
      <div className="follows-container">
        <ul>
          {
            this.props.follows.data.follows.map((follower) => {
              console.log(follower);
              return <li className="follows-follower" key={follower.user._id}>{follower.user.display_name} </li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default Follows;