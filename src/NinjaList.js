import React, { Component } from 'react';
import Ninjas from './Ninjas'

class NinjaList extends Component {
  state = {
    ninjas: [
      { name: 'Kat', age: 30, belt: 'black', id: 1 },
      { name: 'Ghandi', age: 20, belt: 'green', id: 2 },
      { name: 'Leo', age: 25, belt: 'pink', id: 3 }
    ]
  }
  render() {
    return (
      <div className="NinjaList">
        <h1>The Ninja Game</h1>
        <p>Welcome to the dojo</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default NinjaList;