import React, { Component } from 'react';
import Enemy from './Enemy'

class EnemyList extends Component {
  state = {
    enemies: [
      { name: 'Darth Vador', age: 1000, belt: 'black', force: '600', id: 6 },
      { name: 'Anonymous', age: 400, belt: 'invisible', force: '10', id: 7 },
      { name: 'Gemini', age: 35, belt: 'pink',force: '400', id: 8},
      { name: 'Cat Woman', age: 67, belt: 'blue',force: '67', id: 9 },
      { name: 'Donald', age: 55, belt: 'white',force: '55', id: 10 }
    ]
  }
  render() {
    return (
      <div className="EnemyList">
        <h1>The Ninja Game</h1>
        <p>Welcome Ninja , now select your opponent!</p>
        <Enemy enemies={this.state.enemies}/>
      </div>
    );
  }
}

export default EnemyList;