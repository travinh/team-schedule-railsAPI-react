import React, { useState } from 'react'

import {Link} from 'react-router-dom'






export default function Schedule({schedule:{id,title,content,user_id,num_member},remove,addMember}) {
    
    
    // const [num_mem, setNumMember] = useState(num_member)
  
    
    return (
        
        <div>
            <Link to={`/schedules/${id}`}><p>Title: {title} </p></Link>
            <p>Content: {content}</p>
            <p>Member: {num_member} </p>
            <p>User ID: {user_id}</p>
            {/* <button onClick={()=>remove(id)}>Delete</button> */}
            {/* <p>Like: {liked}</p> */}
            {/* <button onClick={()=> setLiked(liked++)}>Like</button>  */}
            {/* <button onClick={()=> {addMember(num_member)}}>+</button> */}

            {/* <button onClick={()=> {setNumMember(num_mem+1)}}>+</button> */}
            
            
            {/* <button onClick={() => remove(id)}>Delete</button> */}


        <hr/>
            
        </div>
    )
}

