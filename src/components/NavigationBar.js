import React , {Component} from 'react';
import '../Assets/css/styles.css';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem  } from 'reactstrap';
 import {NavLink , Link} from 'react-router-dom';
 import Apple from '../Assets/images/Apple.png';

 class Navigation extends Component{
 constructor(props){
   super(props);
   this.closeNav = this.closeNav.bind(this);
   this.toggle = this.toggle.bind(this);
   this.state = {
    isOpen : false
   };
  }
  closeNav(){
    this.setState({
isOpen : false
    });
  }
   toggle() {
     this.setState({
     isOpen: !this.state.isOpen
    });
   
 }

  render(){
  

 
      return(
        <div>
        <Navbar  className="text-center  fixed-top " color="dark" dark white  expand="md" >
      
        <Link className="navbar-brand" to="/">
          <img className="setAppleIcon" src={Apple}  alt="description image"/>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
         
            <Nav className="mx-auto" navbar>
              <NavItem  className="navbarLink ">
                <NavLink to="/" onClick={this.closeNav}>Home</NavLink>
              </NavItem>
              <NavItem  className="navbarLink ">
                <NavLink to="/" onClick={this.closeNav}>Home</NavLink>
              </NavItem>
              <NavItem  className="navbarLink ">
                <NavLink to="/" onClick={this.closeNav}>Home</NavLink>
              </NavItem>
              <NavItem  className="navbarLink ">
                <NavLink to="/" onClick={this.closeNav}>Home</NavLink>
              </NavItem>
              <NavItem  className="navbarLink ">
                <NavLink to="/" onClick={this.closeNav}>Home</NavLink>
              </NavItem>

             

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    
      );
}
    }
export default Navigation;