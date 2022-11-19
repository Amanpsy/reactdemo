import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [
        {
            id:1 ,
            name:'bruce',
            age:30,
            skill:'react'
        
        },


        {
            id:2 ,
            name:'clark',
            age:33,
            skill:'angular'

        },

        {
            id:3 ,
            name:'daina',
            age:22,
            skill:'reactjs'
        }
    ]
    



    const personList= persons.map(person=> (
        <Person person ={person}></Person>
    ))
  return (
    <div>
     {
     personList
     }
    </div>
  )
}

export default NameList
