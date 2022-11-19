import React,{useEffect,useState} from 'react'
import axios from 'axios'

function DataFetching() {

    const[post,setposts] = useState([])
    const[id,setid] =useState(1)


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setposts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })
  return (
    <div>
        <input type="text" value={id} onChange={e =>(e.target.value)} />
<ul>
   { post.map(post => (<li key={post.id}>{post.title}</li>))}
</ul>
      
    </div>
  )
}

export default DataFetching
