import React, { Component } from 'react'
import Link from 'gatsby-link'
import fb from '../../img/facebook.svg'
import twitter from '../../img/t.svg'
import instagram from '../../img/instagram.svg'
import './Navbar.sass'
import logo from '../../img/logo2.png'

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
  <nav className='navbar is-fixed-top' aria-label='main navigation'>
    <div className="container">
    
      <div className="navbar-brand">
      <Link to="/" className="navbar-item">
          <figure className="image nomobile">
            <img src={logo} alt="Projekt Mowa" style={{ width: '88px' }} />
          </figure>
          </Link>
      <button className={['button navbar-burger', css].join(" ")} data-target='navMenu' onClick={this.toggleNav.bind(this)}>
          <span />
          <span />
          <span />
        </button>
        
      </div>
      <div className={['navbar-menu', css].join(" ")} id='navMenu'>
      <div className={['navbar-start', trans].join(" ")}>
      
       
      <Link className="navbar-item" to="/"  onClick={this.closeNav.bind(this)}>
          Strona Głowna
        </Link>
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
       <div className="navbar-end">
       <a href="https://faceboook.com/projektmowa" className="navbar-item" >    
          <figure className="image is-24x24">
    <img src={fb} alt="Projket Mowa Facebook" />
    </figure>
    </a>
    <a href="https://twiter.com//projektmowa" className="navbar-item" >
    <figure className="image is-24x24">
    <img src={twitter} alt="Projekt Mowa Twitter" />
    </figure>
    </a>

    <a href="https://instagram.com/projektmowa" className="navbar-item" >
    <figure className="image is-24x24">
    <img src={instagram} alt="Projekt Mowa Instagram" />
    </figure>
    </a>
         </div>
      </div>
    
  </nav>
);
}};

export default Navbar
