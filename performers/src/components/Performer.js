import React from 'react';
import './Performer.css';

class Performer extends React.Component {
  render() {
    const { performer } = this.props;
    return (
      <div className="Performer">
        <img className="Performer-image" src={performer.hero_image_url} />
        <h4>{performer.name}</h4>
      </div>
    );
  }
}

export default Performer;
