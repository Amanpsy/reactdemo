import React, { Component } from 'react'

 class ArrowFunction extends Component {

    clickHandler(){
        this.setState ({
            message:'goodbye!!!'
        })
    }

constructor(props) {  
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
     <button onClick={() => this.clickHandler()}> CLickk here</button>
        
      </div>
    )
  }
}

export default ArrowFunction
