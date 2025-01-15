import React from "react";
import "./main.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
function NavigationBar() {
    // const styles={
    //   width:"50%",
    //      backdropFilter:'blur(15px)',
    //     backgroundColor:'rgba(1, 9, 32, 0.83)',
    //     color:'white',

    // }
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className='nav--bar fixed-top' >
          <Container fluid>
            <Navbar.Brand href="/" className="Navigation--bar--title">
            <p>   
             
              </p>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="custom-toggler">
  {/* Custom Hamburger Icon */}
  <span className="custom-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="white"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.5 12.5a.5.5 0 010-1h13a.5.5 0 010 1h-13zm0-5a.5.5 0 010-1h13a.5.5 0 010 1h-13zm0-5a.5.5 0 010-1h13a.5.5 0 010 1h-13z"
      />
    </svg>
  </span>
</Navbar.Toggle>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
         
              className="navigation--bat--tag--vertical"
              placement="end">
              <Offcanvas.Header >
              
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div className="navigation--bar--item--tag">
                    <li>
                      
                 <Link className="list--tag--nav" to="/">Home</Link>
                      </li>
                    <li>
                 <Link className="list--tag--nav" to="/review">Review</Link>
                      
                      </li>
                      <li>
                      
                      <Link className="list--tag--nav" to="/mail">Mail</Link>
                           </li>
                  </div>
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