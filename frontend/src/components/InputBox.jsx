import React from 'react'
import { useState } from 'react'

const InputBox = () => {
    const [input, setInput] = useState("")

    function handleChange(event) {
        setInput(event.target.value)
    }
  return (
    <div className='flex justify-center'>
        <input value={input} onChange={handleChange} className='h-10 w-1/2 p-5 flex border border-black'></input>
        <button className='border border-black mx-6 px-6' type="submit">Submit to-do</button>
    </div>
  )
}

export default InputBox