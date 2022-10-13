import React, { Component } from "react";
import {Nav, Navbar, NavItem,NavbarBrand,
    Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';

class Header extends Component
{
    render()
    {
        return(
                        <Navbar color="dark" dark expand="sm" >
                            <NavbarBrand href="/" className="justify-content-center">
                                <h5  style={{'font-family': '"Lucida Console", "Courier New", monospace'}}>DEE Buys iPhones</h5>
                        </NavbarBrand>
                        <div className="container">
                        
                            <Collapse navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <Link className='nav-link' to='/'>
                                       <span className='fa fa-home fa-lg'></span>  Home
                                       </Link>
                                    </NavItem>
                                
                                </Nav>
                                
                    </Collapse>
                     
                        </div>
                    </Navbar>
       
            
        );
    }
    
}

export default Header;