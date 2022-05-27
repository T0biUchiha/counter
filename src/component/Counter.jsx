import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}><h3>+</h3></button>
      <button onClick={()=>{setCount(count-1)}}><h3>-</h3></button>
      <button onClick={()=>{setCount(count*2)}}><h3>Double</h3></button>
      <button onClick={()=>{setCount(count*0)}}><h3>Reset</h3></button>
    </div>
  )
}

export default Counter
