import React, { Component } from 'react'
import Link from 'gatsby-link'
import './Navbar.sass'

class Navbar extends Component {
 
  state= { active: false};

    
  toggleNav() {
    this.setState({active: !this.state.active});
} 
  closeNav(){
    this.setState({active:false})
  }

  render(){
  
    let css = "";
    let trans = "is-close"
    if(this.state.active) {
      css = "is-active"
      trans = "is-active"
    }

  return(
  <nav className='navbar' aria-label='main navigation'>
    <div className="container">
    
      <div className="navbar-brand">
      <button className={['button navbar-burger', css].join(" ")} data-target='navMenu' onClick={this.toggleNav.bind(this)}>
          <span />
          <span />
          <span />
        </button>
        
      </div>
      <div className={['navbar-menu', css].join(" ")} id='navMenu'>
      <div className={['navbar-start', trans].join(" ")}>
      
       
     
      <Link className="navbar-item" to="/blog"  onClick={this.closeNav.bind(this)}>
          Blog
        </Link>
        <Link className="navbar-item" to="/oferta"  onClick={this.closeNav.bind(this)} >
          Oferta
        </Link>
        <Link className="navbar-item" to="/omnie"  onClick={this.closeNav.bind(this)} >
          O mnie
        </Link>
        <Link className="navbar-item" to="/referencje"  onClick={this.closeNav.bind(this)}>
          Referencje
        </Link>
        <Link className="navbar-item" to="/wspolpraca"  onClick={this.closeNav.bind(this)}>
        Współpraca
        </Link>
        <Link className="navbar-item" to="/kontakt"  onClick={this.closeNav.bind(this)}>
          Kontakt
        </Link>
      </div>
      
       </div>
      </div>
    
  </nav>
);
}};

export default Navbar
