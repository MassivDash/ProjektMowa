import React from 'react';
import Link from 'gatsby-link'
import './Slide.sass'

const Slide = (props) => (
<div key={props.myKey}
className="myslide" style={{backgroundImage: 'url(' + props.thumbnail + ')'}} >
  <figure className="slide">
   <Link className="slider_title" to={props.slug}>
      {props.title}
  </Link>
  
  <p>
  <small>{props.date}</small>
</p>
<p className="slider_description">
  {props.excerpt}
  <br />
  <br />
  <Link className="button is-big" to={props.slug}>
    Czytaj Więcej
  </Link>
</p>
  
  </figure>

  

</div>)

export default Slide 