import React, { Component } from 'react'

 class ConstructorBind extends Component {

    clickHandler(){
        this.setState ({
            message:'goodbye !'   //binding in class constructor
        })
    }

constructor(props) {  
  super(props)

  this.state =( {
        message: 'Hello'
  })
 this.clickHandler = this.clickHandler.bind(this)
}



  render() {
    return (
      <div>
        <div> {this.state.message}</div>
        <button onClick={this.clickHandler}> Click</button>
        
        
      </div>
    )
  }
}

export default ConstructorBind
