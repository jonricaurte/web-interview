import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peformers: []
    };
  }

  componentDidMount() {
    var self = this;
    axios.get('https://mobile-staging.gametime.co/v1/performers')
      .then(({ data }) => {
        self.setState({ performers: data.performers });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderCollectionItems() {
    // TODO
  }
  
  render() {
    return (
      <div>
        1. render collection items here
      </div>
    );
  }
}

export default App;
