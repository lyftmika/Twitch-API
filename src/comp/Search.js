import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Lyftmika',
      response: {
        data: {},
      },
      follows: {
        data: {
          follows: [],
        },
      },
    }
  }

  setUser = () => {
    this.setState({
      name: this.refs.usernameSearch.value,
    });
  }

  fetchUser = event => {
    this.loadData();
  }

  loadData = () => {
    const user = this.state.name;
    const url = `https://api.twitch.tv/kraken/channels/${user}?client_id=fklodlfzzugl04ylf5nlwurs3gayvl3`;
    const getFollows = `https://api.twitch.tv/kraken/channels/${user}/follows?client_id=fklodlfzzugl04ylf5nlwurs3gayvl3`;
    axios.get(getFollows).then((follows) => {
      this.setState({follows:follows});
    });
    axios.get(url)
    .then((response) => {
      this.setState({response: response});
      this.props.user(this.refs.usernameSearch.value, this.state.response, this.state.follows);
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render () {
    return (
      <div className="search-container">
        <div className="search-title">
          Enter your stream name: <br />
        </div>
        <div className="searchbar-container">
          <input
            type="text"
            ref="usernameSearch"
            className="search-input"
            placeholder="Voer hier uw Twitch username in"
            onChange={this.setUser}
          />
          <div className="search-confirm" onClick={this.fetchUser}>Zoek</div>
        </div>
      </div>
    );
  }
}

export default Search;