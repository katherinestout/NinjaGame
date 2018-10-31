import React, { Component } from 'react';
import Enemy from './Enemy';
//import PropTypes from 'prop-types';
//import NinjaList from './NinjaList';

class EnemyList extends Component {
  constructor(props) {
    super(props);
  this.state = {
    enemies: [
      { name: 'Darth Vador', age: 1000, belt: 'black', force: '600', id: 6 },
      { name: 'Anonymous', age: 400, belt: 'invisible', force: '10', id: 7 },
      { name: 'Gemini', age: 35, belt: 'pink',force: '400', id: 8},
      { name: 'Cat Woman', age: 67, belt: 'blue',force: '67', id: 9 },
      { name: 'Donald', age: 55, belt: 'white',force: '55', id: 10 }
    ],
    selectEnemy: '',
   
    
  }}

  handleClick = name => {
    //console.log(name);
    this.setState({
      //selectNinja: this.state = name
      selectEnemy: name
      
    });
    console.log(this.state.selectEnemy);
    //setstate
  }
  
  renderEnemy = enemy => 
    <Enemy key = {enemy.name} 
    enemy={enemy} 
    onClick = {this.handleClick}/>
  

  render() {
    return (
      <div className="EnemyList">
        
        <p>Welcome, Ninja
           ! 

        <br></br>
        Select who you would like to challenge to a battle: 
            {this.state.selectEnemy} </p>
      <ul>
        {this.state.enemies.map(this.renderEnemy)}
      </ul>
      </div>
    );
  }
}

export default EnemyList;