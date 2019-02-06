import React , {Component} from 'react';
import '../Assets/css/styles.css';
import {Link , NavLink} from 'react-router-dom';
import {Navbar,
        NavbarToggler,
        Collapse,
        Nav,
        NavItem,
        } from 'reactstrap';
import Apple from '../Assets/images/Apple.png';

 class Navigation extends Component{
 constructor(props){
   super(props);
  this.closeNav = this.closeNav.bind(this);
  
   this.toggleNavigation = this.toggleNavigation.bind(this);
   this.state = {
    isOpen : false
   };
  }
  
  toggleNavigation(){
    this.setState({
    isOpen : !this.state.isOpen
  })
  }
  closeNav(){
    this.setState({
    isOpen:false
    })
  }
 
  render(){
  return(

    <div>
      <Navbar className="fixed-top" dark expand="md" style={{background:'rgba(0,0,0,0.8)',
      padding:'6px'
}}>
  < Link to="/">
  <img className="img-alignment" src={Apple} alt="Logo" width="28px" 
  style={{marginLeft: '254px',
}}/>
  </Link>
  <NavbarToggler onClick={this.toggleNavigation} className="mr-2" />

  <Collapse  isOpen={this.state.isOpen} navbar>
    <Nav   navbar  >
      <NavItem>
        <NavLink className="navbarLink "  to="/" onClick={this.closeNav}>Mac</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="navbarLink " to="/" onClick={this.closeNav}>iPad</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="navbarLink " to="/" onClick={this.closeNav}>iPhone</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="navbarLink " to="/" onClick={this.closeNav}>Watch</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="navbarLink " to="/" onClick={this.closeNav}>TV</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="navbarLink " to="/" onClick={this.closeNav}>Music</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="navbarLink " to="/" onClick={this.closeNav}>Support</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
    </div>
      );
 }
    }
export default Navigation;



