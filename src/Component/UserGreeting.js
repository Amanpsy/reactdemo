import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
                isLoggedIn: true
      }
    }
    

  render() {


    // let message
    // if(this.state.isLoggedIn){    method number 2
    //     message = <div> welcome Aman</div>
    // }
    // else {
    //     message = <div>welcome Guest</div>
    // }

    // return <div>{message} </div>

    // if(this.state.isLoggedIn){    //method number 1
    //     return (
    //         <div> Welcome Vishwas</div>
    //     )
    // }
    //     else {
    //         return (
    //             <div>welcome Guest</div>
    //         ) }
        

    
    // return (
    //   <div>
    //     <div> Welcome Aman</div>
    //     <div> Welcome Guest</div>


    //  return(
    //     this.state.isLoggedIn ?
    //     <div> welcome aman</div> : turnory condition approach

    //      <div>welcome guest </div>

    //  )
     
 return this.state.isLoggedIn && <div> welcome aman</div>   //shortcircuit operator
     
  }
}

export default UserGreeting
