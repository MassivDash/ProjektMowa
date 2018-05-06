import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import config from "../../data/SiteConfig";
import SEO from '../components/SEO/seo';
import Navbar from '../components/Navbar/Navbar'


export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  thumbnail,
  slug,
  date,
  postNode,
  postPath,
  
}) => {
  const PostContent = contentComponent || Content
 
  
  return (
    <div>
    {helmet}
    <SEO postPath={slug} postNode={postNode} postSEO />
    
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
          {Pagnation}
          </div>

          </div>
      </section>
    
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { allMarkdownRemark: edges } = data
  
  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`}/>}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      slug={post.fields.slug}
      thumbnail={post.frontmatter.thumbnail}
      date={post.frontmatter.date}
      postNode={post}
      postPath={post.fields.slug}
      
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 16) {
      edges {
      
        
        node {
          
          excerpt(pruneLength: 400)
          id
          children {
            id
            parent {
              id
            }
            
            
          }
          fields {
            slug
          }
          frontmatter {
            
            title
            thumbnail
            description
            templateKey
            date(formatString: "MMMM DD, YYYY", locale: "pl")
            
          }
        }
      }
    }
  }
`
