import React from 'react';
import './App.css';
import Filter from './components/Filter';
import PerformerList from './components/PerformerList';

class App extends React.Component {
  state = {
    filter: 'all'
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter } = this.state;
    return (
      <div className="App">
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <PerformerList filter={filter} />
      </div>
    );
  }
}

export default App;
