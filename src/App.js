import React, { Component } from 'react';
import NinjaList from './NinjaList';
import EnemyList from './EnemyList';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NinjaList/>
        <br></br>
        <EnemyList />
      </div>
    );
  }
}

export default App;