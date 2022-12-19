import React, { useState } from 'react'
import { Navbar, 
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap'
import { AiFillHtml5 } from "react-icons/ai"
import { FaCss3Alt } from "react-icons/fa"
import { TbBrandJavascript } from "react-icons/tb"
import { BsBootstrap } from "react-icons/bs"
import { GiFireBowl} from "react-icons/gi"

function Home() {


  const [collapse, setCollapse] = useState(false)

 function handleToggle(){
  setCollapse(!collapse)
 }

 const settings = {
  dots: true,
  speed: 1000,
  autoPlay: true
 }


 const info = [
  {icon: <GiFireBowl size={28} color={"orange"}/>, text: "i am exceptional"},
  {icon: <GiFireBowl size={28} color={"orange"}/>, text: "i am a javascript full stack developer"},
  {icon: <GiFireBowl size={28} color={"orange"}/>, text: "please contact me"},

 ]

  return ( 
    <div> 
      <Navbar expand={"md"} className="bg-dark" dark>
        <NavbarBrand href="/" className="me-auto">
          Logo
        </NavbarBrand>
        <NavbarToggler onClick={handleToggle} className="me-2" />
        <Collapse isOpen={collapse} navbar>
          <Nav className='m-auto' navbar>
            <NavItem>
              <NavLink className='text-end' href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-end' href="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div className="banner position-relative">
        <p className="position-absolute top-50 start-50 text-white translate-middle">
          <h2 className='fw-bold h1'>Esq. Yusuf</h2>
          <p>welcome to my portfolio</p>
          <div className='d-flex justify-content-between'>
            <button className='btn btn-md btn-info'>contact me</button>
            <button className='btn btn-md btn-info'>Resume</button>
          </div>
        </p>
      </div>

      <div className='services'>
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-3">
              <div className="text-center card p-3">
                <h3 className="">Quick Delivery</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="text-center card p-3">
                <h3 className="">Quick Delivery</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="text-center card p-3">
                <h3 className="">Quick Delivery</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="text-center card p-3">
                <h3 className="">Quick Delivery</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="language">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-12 col-md-6">
              <img src="./../../language.svg" alt="" />
            </div>

            <div className="col-12 col-md-6">
              
              <div className='mb-5'>
              <AiFillHtml5 size={40}/>
              <FaCss3Alt size={40}/>
              <TbBrandJavascript size={40}/>
              <BsBootstrap size={40}/>
              </div>

              {
                info?.map((data) =>(
                  <div className="d-flex align-items-center">
                    {data?.icon}
                    <p>{data?.text}</p>
                  </div>
                ))
              }

              

              

            </div>

          </div>
        </div>

      </div>
    
    </div>
  )
}

export default Home