import React from 'react';
import PropTypes from 'prop-types';

class Ninjas extends React.Component {
  handleClick = () => {
    // No bind needed since we can compose the relevant data for this item here
    this.props.onClick(this.props.ninja.name);
  }

  // Note that an arrow func is no longer needed in render! 👍
  render() {
    return (
      <li>
          <div onClick={this.handleClick}> {this.props.ninja.name}
          </div>
      </li>
    );
  }
}

Ninjas.propTypes = {
  ninja: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Ninjas;