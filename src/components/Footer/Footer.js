import React from 'react'
import Link from 'gatsby-link'
import logo from '../../img/logo2.png'
import fb from '../../img/facebook.svg'
import twitter from '../../img/t.svg'
import mail from '../../img/email.svg'
import instagram from '../../img/instagram.svg'

import './Footer.sass'

const Footer = () => (
    <footer>
      <div className="container">
      <div className="columns">

        
        <div className="column">
          <div className="logofoot">
        <Link to="/" >
          <figure className="image is-128x64">
            <img src={logo} alt="Fundacja Idea Nowa"  />
          </figure>
        </Link>

         
         

        </div>
        </div>
        <div className="column">
          <div className="flexbox">
        

       
        <p><a href="tel:664654014">664 654 014</a> <br />
           <a href="mailto:info@projektmowa.pl"><b>e-mail:</b> info@projektmowa.pl</a></p>
         </div> 
      </div>
      <div className="column">
          <div className="flexbox">
          <a href="https://www.facebook.com/projektmowa.neurologopeda/" className="navbar-item" >    
          <figure className="image is-24x24">
    <img src={fb} alt="Projket Mowa Facebook" />
    </figure>
    </a>
    <a href="https://twitter.com/ProjektMowa" className="navbar-item" >
    <figure className="image is-24x24">
    <img src={twitter} alt="Projekt Mowa Twitter" />
    </figure>
    </a>

    <a href="https://www.instagram.com/pysklomarta_projektmowa/" className="navbar-item" >
    <figure className="image is-24x24">
    <img src={instagram} alt="Projekt Mowa Instagram" />
    </figure>
    </a>
        
        <a href="mailto:info@projektmowa.pl" className="navbar-item" >
          
          
          <figure className="image is-24x24">
            <img src={mail} alt="Projekt Mowa"  />
          </figure>
        </a>
        
         </div> 
      </div>
      </div>
  </div>
  <div className="columns">
    <div className="column">
  <div className="container">
          <div className="menu">
          <Link className="navbar-item" to="/">
            Strona Głowna
          </Link>
        <Link className="navbar-item" to="/blog">
            Blog
          </Link>
          <Link className="navbar-item" to="/oferta">
            Oferta
          </Link>
          <Link className="navbar-item"  to="/omnie">
            O mnie
          </Link>
          <Link className="navbar-item" to="/referencje">
            Referencje
          </Link>
          <Link className="navbar-item" to="/wspolpraca" >
          Współpraca
        </Link>
          <Link className="navbar-item" to="/kontakt">
            Kontakt
          </Link>
          </div>
        </div>
        </div>
  </div>

  <div className="columns">
    <div className="column">
  <p style={{ textAlign: 'center', color: '#4f4f4f'}}>
  <small>Designed by spaceout.pl</small>
  </p>
  </div>
  </div>
  </footer>
)

export default Footer