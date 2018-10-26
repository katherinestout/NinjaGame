import React from 'react';
import PropTypes from 'prop-types';

class Ninjas extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.ninja.name);
  }

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