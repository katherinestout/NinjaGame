import React, { Component } from 'react'

class Enemy extends Component{
  render(){
    const { enemies } = this.props;
    const enemyList = enemies.map(enemy => {
      return (
        <div className="ninja" key={enemy.id}>
          <div>Name: { enemy.name }</div>
          <div>Age: { enemy.age }</div>
          <div>Belt: { enemy.belt }</div>
         
        </div>
      )
    });
    return (
      <div className="enemy-list">
        { enemyList }
      </div>
    )
  }
}

export default Enemy;