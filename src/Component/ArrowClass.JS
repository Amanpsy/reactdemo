import React, { Component } from 'react'

 class ArrowClass extends Component {

    clickHandler =() => {
        this.setState({
            message: 'goodbubyee'
        })
    }
constructor(props) {  
  super(props)

  this.state =( {
        message: 'Hello'
  })
 //this.clickHandler = this.clickHandler.bind(this)
}



  render() {
    return (
      <div>
        <div> {this.state.message}</div>
        <button onClick={this.clickHandler}> Click here</button>
        
        
      </div>
    )
  }
}

export default ArrowClass
