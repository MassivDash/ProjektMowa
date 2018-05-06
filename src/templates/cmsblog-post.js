import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import Navbar from '../components/Navbar/Navbar'


export const CMSBlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  thumbnail,
  slug,
  date,
  
}) => {
  const PostContent = contentComponent || Content
 
  
  return (
    <div>
    
    <Navbar />
    <section 
  className="hero is-info is-large blogsection" style={{
    backgroundImage: "url(" + thumbnail + ")",
          }}>
  <div className="hero-body">
    <div className="container">
      <div className="columns">
           <div className="column titlecolumn"> 
            <div className="mytitle">
              {title}
              
              </div>
              <div className="blogdate">{date}</div>
              <p>{description}</p>
          </div>
  </div>
  </div>
  </div>
</section>
    <section className="section">
      
    
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
          
            
            <PostContent content={content} />
            </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container mypagination">
          <div className="columns">
          
          </div>

          </div>
      </section>
    
    </div>
  )
}

CMSBlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

const CMSBlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  
  
  return (
    <CMSBlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      slug={post.fields.slug}
      thumbnail={post.frontmatter.thumbnail}
      date={post.frontmatter.date}
      
      
    />
  )
}

CMSBlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CMSBlogPost

export const pageQuery = graphql`
  query CMSBlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "MMMM DD, YYYY", locale: "pl")
        title
        thumbnail
        description
        tags
      }
    }
  }
`
