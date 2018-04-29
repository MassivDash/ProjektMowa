import React from 'react'
import Link from 'gatsby-link'
import './BlogFigure.scss'

const BlogFigure = (props) => (
    <div key={props.myKey}
                className="content blogfigure" >
                <div className="columns">
                    
                    <div className="column flex">
                        <p>
                  <Link to={props.slug}>
                  <h5>{props.title}</h5>
                  </Link>
                  <small>{props.date}</small>
                </p>
                <p>
                  {props.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={props.slug}>
                    Czytaj Więcej
                  </Link>
                </p>
              </div>
              </div>
              </div>

);

export default BlogFigure
