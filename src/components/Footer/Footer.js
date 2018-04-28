import React from 'react'
import Link from 'gatsby-link'
import logo from '../../img/logosmall.png'
import mail from '../../img/sent-mail.svg'
import fb from '../../img/fb.svg'
import twitter from '../../img/twitter.svg'
import './Footer.sass'

const Footer = () => (
    <footer>
      <div className="container">
      <div className="columns">

        
        <div className="column">
          <div className="logofoot">
        <Link to="/" >
          <figure className="image is-64x64">
            <img src={logo} alt="Fundacja Idea Nowa"  />
          </figure>
        </Link>

         <p>Projekt<br />
         </p>

        </div>
        </div>
        <div className="column">
          <div className="flexbox">
        

       
        <p><a href="tel:583418894"><b>tel:</b> 583 418 894 </a> <br />
        <a href="tel:501761361"><b>kom:</b> 501 761 361</a><br />  
        <a href="mailto:fundacja@nowaidea.org.pl"><b>e-mail:</b> fundacja@nowaidea.org.pl</a></p>
         </div> 
      </div>
      <div className="column">
          <div className="flexbox">
        

        
        
        <a href="mailto:fundacja@nowaidea.org.pl" className="navbar-item" >
          <figure className="image is-24x24">
            <img src={mail} alt="Fundacja Nowa Idea"  />
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
          <Link  to="/">
            Strona Głowna
          </Link>
        <Link  to="/projekty">
            Projekty
          </Link>
          <Link to="/ofundacji">
            O fundacji
          </Link>
          <Link  to="/cele">
            Cele
          </Link>
          <Link  to="/kontakt">
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