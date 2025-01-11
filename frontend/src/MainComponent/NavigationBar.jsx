import React from "react";
import "./main.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavigationBar() {
    const styles={
      width:"50%",
         backdropFilter:'blur(15px)',
        backgroundColor:'rgba(1, 9, 32, 0.83)',
        color:'white',

    }
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className='nav--bar fixed-top  ' >
          <Container fluid>
            <Navbar.Brand href="/" className="Navigation--bar--title">
            <p>   
             
              </p>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            style={styles}
              id={`offcanvasNavbar-expand-${expand}`}
              placement="end">
              <Offcanvas.Header  closeButton >
              
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;