import React from 'react';
import axios from 'axios';
import Performer from './Performer';
import './PerformerList.css';

class PerformerList extends React.Component {
  state = {
    performers: []
  };

  componentDidMount() {
    axios
      .get('https://mobile-staging.gametime.co/v1/performers')
      .then(response => {
        this.setState({
          performers: response.data.performers
        });
      })
      .catch(() => {
        this.setState({
          hasError: true
        });
      });
  }

  showError() {
    if (!this.state.hasError) return null;

    return <div>There was an error making the request</div>;
  }

  render() {
    const { filter } = this.props;
    const { performers } = this.state;

    const filteredPerformers = performers.filter(performer => {
      if (filter === 'all') {
        return true;
      }
      return performer.category_group === filter;
    });
    console.log(filteredPerformers.length);
    return (
      <section className="PerformerList">
        {this.showError()}
        {this.state.performers.map(performer => (
          <div key={performer.id} className="PerformerList-item">
            <Performer performer={performer} />
          </div>
        ))}
      </section>
    );
  }
}

export default PerformerList;
