import React from 'react';
import './Filter.css';

class Filter extends React.Component {
  state = {
    filters: ['all', 'sport', 'music', 'theater']
  };

  render() {
    return (
      <div className="Filter">
        <div className="Filter-text">Filter:</div>
        <select
          className="Filter-dropdown"
          value={this.props.filter}
          onChange={this.props.onFilterChange}
        >
          {this.state.filters.map(filter => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Filter;
