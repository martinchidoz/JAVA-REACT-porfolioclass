import React, { useEffect,useLayoutEffect, useState, useRef } from 'react'

function Test() {

  const input = useRef()
  const btnref = useRef()

  const [name, setname] = useState("yusuf")
  const [skin, setskin] = useState("ebony")
  const [state, changestate] = useState("kwara")
  
  //useLayoutEffect(() =>{
  //  alert("hello")
  //}, [])

 const handleClick = () =>{
  
 }
 

  return (
    <div>
     <h1>{name}</h1>
     <h1>{skin}</h1>
     <h1>{state}</h1>

    <input type="text" ref={input} />

     <button ref={btnref} onClick={handleClick}>getvalue</button>
     <button onClick={() => setname("kayode")}>changename</button>
     <button onClick={() => setskin("black")}>changeskin</button>
     <button onClick={() => changestate("ondo")}>changestate</button>
    </div>
  )
}

export default Test