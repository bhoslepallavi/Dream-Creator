import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../Assets/Images/logo.jpeg';
import './Header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <Container fluid className='mainHeader'>
        <Row className="mainRow">

          <Col lg={3} md={3} className="logoCol">
            <img src={logo} alt="logo" />
          </Col>

          
          <Col lg={9} md={9} className="navCol">
              <div className='navlinkRow'>
                <NavLink to="/" className="headerNavlink"> Home </NavLink>
                <NavLink to="/about" className="headerNavlink"> About Us </NavLink>
                <NavLink to="/contact" className="headerNavlink"> Contact </NavLink>
                <NavLink to="/event" className="headerNavlink"> Event </NavLink>
                <NavLink to="/service" className="headerNavlink"> Services </NavLink>
                <NavLink to="/testimonials" className="headerNavlink"> Testimonials </NavLink>
              </div>
            
           </Col>

        </Row>

    </Container>
  )
}

export default Header