import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import thumbnail from '../img/background.jpg'


export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: blog } = data.allMarkdownRemark
    
    return (
      <div>
      <section 
        className="hero is-info is-small " style={{
        background: "url(" + thumbnail + ")",
        backgroundSize: "cover",
        backgroundPosition: "bottom"
      }}>
  <div className="hero-body">
    <div className="container">
      <div className="columns">
           <div className="column"> 
            <div className="mytitle">
            Blog
              </div>
          </div>
  </div>
  </div>
  </div>
</section>
      <section className="section">
        <div className="container">
          
          {blog
            .filter(blog => blog.node.frontmatter.templateKey === 'blog-post')
            .map(({ node: blog }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={blog.id}
              >
                <p>
                  <Link className="has-text-primary" to={blog.fields.slug}>
                    {blog.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{blog.frontmatter.date}</small>
                </p>
                <p>
                  {blog.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={blog.fields.slug}>
                    Czytaj Więcej →
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </section>
      </div>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY", locale: "pl")
          }
        }
      }
    }
  }
`
