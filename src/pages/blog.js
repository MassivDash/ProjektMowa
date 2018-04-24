import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import thumbnail from '../img/background.jpg'


export default class ProjektyPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: projekt } = data.allMarkdownRemark
    
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
            Nasze Projekty
              </div>
          </div>
  </div>
  </div>
  </div>
</section>
      <section className="section">
        <div className="container">
          
          {projekt
            .filter(projekt => projekt.node.frontmatter.templateKey === 'projekt-post')
            .map(({ node: projekt }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={projekt.id}
              >
                <p>
                  <Link className="has-text-primary" to={projekt.fields.slug}>
                    {projekt.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{projekt.frontmatter.date}</small>
                </p>
                <p>
                  {projekt.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={projekt.fields.slug}>
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

ProjektyPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ProjektyQuery {
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
