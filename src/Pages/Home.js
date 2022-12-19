import React, { useState } from 'react'
import { Navbar, 
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap'

 import Slider from 'react-slick'

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

      <div className="banner">
        <Slider {...settings}>
          <img src="./../../display.jpeg" alt="" />
          <img src="./../../login.jpg" alt="" />
          
        </Slider>
      </div>
    
    </div>
  )
}

export default Home