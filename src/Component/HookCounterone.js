import React,{useEffect, useState} from 'react'

function HookCounterone() {

    const [count, setcount] = useState(0)
    const[name, setname] =useState('')

    useEffect(() =>{
        console.log('useEffect-  updating document title')
    document.title= `You clicked ${count} times`

    },[count])

  return (
    <div>
        <input type='text'value={name} onChange={e =>setname(e.target.value)} />
      <button onClick={() => setcount(count +1)}>click{count} times</button>
    </div>
  )
}

export default HookCounterone
