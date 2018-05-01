import React from 'react'
import Link from 'gatsby-link'
import './OtherPosts.scss'


const OtherPosts = (props) => (
    
    <Link to={props.slug} className="otherposts" style={{ backgroundImage: 'url(' + props.thumbnail + ')' }}>    
        <div className="otherpostes_holder">
            <div className="otherpost_title">{props.title}</div>
            <div className="otherpost_date">{props.date}</div>
        </div>
    </Link>
    

);

export default OtherPosts