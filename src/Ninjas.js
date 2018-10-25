import React, { Component } from 'react'

class Ninjas extends Component{
  
  
    handleClick = (props) => {
        console.log(this.props.ninjas);
     
    };

    
  render(){

    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {

      return (
        <div className="ninja" key={ninja.id} onClick={this.handleClick} >
          <div>
          Name: { ninja.name }</div>
          <div>Age: { ninja.age }</div>
          <div>Belt: { ninja.belt }</div>
        
        </div>
      )
    });
    return (
      <div className="ninja-list">
        { ninjaList }
      </div>
    )
  }
}

export default Ninjas;