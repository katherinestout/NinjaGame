import React from 'react';
import PropTypes from 'prop-types';

class Enemy extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.enemy.name);
  }

  render() {
    
    return (
      <li>
          <div onClick={this.handleClick}> 
          {this.props.enemy.name}
          {this.props.enemy.force}
          </div>
      </li>
    );
  }
}

Enemy.propTypes = {
  enemy: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Enemy;