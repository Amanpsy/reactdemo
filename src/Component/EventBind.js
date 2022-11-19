import React, { Component } from 'react'

 class EventBind extends Component {

    clickHandler(){
        this.setState ({
            message:'goodbye'
        })
    }

constructor(props) {   //by using binding in render method
  super(props)

  this.state =( {
        message: 'Hello'
  })
  console.log(this)
}



  render() {
    return (
      <div>
        <div> {this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}> Click</button>
        
      </div>
    )
  }
}

export default EventBind
