import React, { Component } from 'react';
import Ninjas from './Ninjas'

class NinjaList extends Component {
  state = {
    ninjas: [
      { name: 'Kat', age: 30, belt: 'purple', force: '123', id: 1 },
      { name: 'Ghandi', age: 200, belt: 'yellow', force: '10000', id: 2 },
      { name: 'Leo', age: 25, belt: 'magenta',force: '30', id: 3 },
      { name: 'Snoop Dog', age: 250, belt: 'green',force: '300', id: 4 },
      { name: 'Obama', age: 45, belt: 'America',force: '85', id: 5 }
    ]
  }

  

  render() {
    return (
      <div className="NinjaList">
        <h1>The Ninja Game</h1>
        <p>Welcome to the dojo, select your ninja: </p>
        <Ninjas ninjas={this.state.ninjas}
   />
      </div>
    );
  }
}

export default NinjaList;