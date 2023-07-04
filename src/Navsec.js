import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Home from './Home'
import Contact from './Contact';
import About from './About';
const Navsec =()=>{
return(
    <div>
        <BrowserRouter>
        <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">About</Nav.Link>
      </Nav.Item>
    </Nav>
        <Routes>
<Route path='Home' element={<Home/>}/>
<Route path='Contact' element={<Contact/>}/>
<Route  path='About' element={<About/>}/>
        </Routes>
        
        </BrowserRouter>
    </div>
)
}
export default Navsec;