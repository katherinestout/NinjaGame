import React, { Component } from 'react'

class Ninjas extends Component{
  
    
  render()
  {
   
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {

      return (
        <div className="ninja" key={ninja.id}  >

          <div onClick={this.handleClick}>
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

handleClick = () => {
    console.log(this.props.ninjas);
 
};
}

export default Ninjas;