import React from 'react'

function Bio(props) {
  return (

    <div>
        <a href="">home</a>
        <h1>my name is {props.name} and i am from {props.state}</h1>
    </div>
  )
}

export default Bio