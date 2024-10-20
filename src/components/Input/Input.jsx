import React, { useState } from 'react'

const Input = () => {
    const [val,setVal] = useState('Hi')
  return (
    <div>
        <p>{val}</p>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
        <br />
        <input type="text" value={val.toLocaleLowerCase()==="hi"?'Hello':val}   onChange={(e)=>setVal(e.target.value)} />

    </div>
  )
}

export default Input