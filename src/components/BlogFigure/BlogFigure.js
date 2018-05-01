import React from 'react'
import Link from 'gatsby-link'
import './BlogFigure.scss'

const BlogFigure = (props) => (
    <div key={props.myKey}
                className="content blogfigure" >
                <div className="columns">
                    
                    <div className="column flex">
                        <div>
                  <Link to={props.slug}>
                  <div className="blogfigure_title">{props.title}</div>
                  </Link>
                  
                  <small>{props.date}</small>
                </div>

                <p>
                  {props.excerpt}
                  <br />
                  <br />
                  </p>
                  <Link className="button is-small" to={props.slug}>
                    Czytaj Więcej
                  </Link>
                
              </div>
              </div>
              </div>

);

export default BlogFigure
