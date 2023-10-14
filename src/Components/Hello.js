import React from 'react'
import { useState } from 'react';
export default function 
 Hello() {
    let [count,setCount]=useState(1);
    
 
  return (
    <div className='container'>
    <div className='container border p-6'>
     {count}
    </div>
       <button onClick={()=>{
        setCount(count+1)
       }}>Click
        </button>  
    </div>                            
  )
}
