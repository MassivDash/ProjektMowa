import React from 'react'
import fb from '../../img/facebook.svg'
import twitter from '../../img/t.svg'
import './Topbar.scss'
import tel from '../../img/tel.svg'
import email from '../../img/email.svg'


const Topbar = () => (  
  <nav className='topbar' aria-label='main navigation'>
    <div className="container flex">
    <div className="contact-details">
        <div className="top-bar-item"> 
            <figure className="image is-24x24 marginright">
                <a href="tel:664654014">
                    <img src={tel} alt="Projket Mowa Telephone" />
                </a>
            </figure><a href="tel:664654014">
            664 654 014</a> 
        </div>
         <div className="top-bar-item"> 
    <figure className="image is-24x24">
    <a href="mailto:info@projektmowa.pl"><img src={email} alt="Projket Mowa Email" /></a></figure>
    <a href="mailto:info@projektmowa.pl">info@projketmowa.pl
        </a>
        </div>
   </div>
          
      <div className="socialicons">
    
    <figure className="image is-24x24">
    <img src={fb} alt="Projket Mowa Facebook" />
    </figure>
    
    <figure className="image is-24x24">
    <img src={twitter} alt="Projekt Mowa Twitter" />
    </figure>
      
       </div>
     </div>
    
  </nav>
);


export default Topbar
