import React from 'react'
import Link from 'gatsby-link'


const OtherPosts = (props) => (
    
    <Link to={props.slug} className="otherposts">    
        
            <div className="otherpost_title">{props.title}</div>
            <div className="otherpost_date">{props.date}</div>
        
    </Link>
    

);

export default OtherPosts