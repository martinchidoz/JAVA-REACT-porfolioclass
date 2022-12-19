import React, { Component } from 'react'


class Test3 extends Component {

  constructor(){
    super()
    this.state = {
      name : "yusuf",
      skin: "ebony",
      count: 0
    }
  }

  componentWillMount(){
    console.log("will mount")
  }

 

  componentDidMount(){
    console.log("did mount")
  }

  render() {


    return (
    <>
  
      <h1>{this.state.count}</h1>
      <h1>{this.state.name}</h1>
      <h1>{this.state.skin}</h1>
      <button onClick={() => this.setState({name: "kayode", skin: "oyinbo"})}>click</button>
      <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
      <button onClick={() => 
        this.setState({count: this.state.count < 1 ? 0 : this.state.count - 1})}>
        -
      </button>
    </>
    )
  }
}

export default Test3

