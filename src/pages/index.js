import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Slider from "react-alice-carousel"
import config from "../../data/SiteConfig"
import Slide from '../components/Slide/Slide'
import Navbar from '../components/NavbarMainPage/Navbar'
import logo from '../img/logo2.png'
import Topbar from '../components/Topbar/Topbar'


export default class IndexPage extends React.Component {
  state = {
    currentIndex:0,
    
  };


  render() {


    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { currentIndex } = this.state;
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1024: {
        items: 2
      }
    };    
    const Slides = posts.filter(post => post.node.frontmatter.templateKey === 'blog-post')
    .map(({ node: post, i }) => (
      <div key={i + 1} ><Slide
        key={i}
        myKey={post.fields.slug}
        thumbnail={post.frontmatter.thumbnail}
        title={post.frontmatter.title} 
        date={post.frontmatter.date}
        excerpt= {post.excerpt}
        slug={post.fields.slug}
        description={post.frontmatter.description}   
      /></div>
      )  
      )

    return (
      

      <div>
      <Helmet>
      <title> Projekt Mowa, pasja brzmienia i mowienia </title>
      <meta property="og:url"                content="Projekt Mowa, pasja brzmienia i mowienia" />
      <meta property="og:type"               content="website" />
      <meta property="og:title"              content="Projekt Mowa, pasja brzmienia i mowienia" />
      <meta property="og:description"        content="Projekt Mowa, pasja brzmienia i mowienia" />
      <meta property="og:image"              content={config.siteLogo} />

      <meta name="twitter:title" content="Projekt Mowa, pasja brzmienia i mowienia" />
      <meta name="twitter:description" content="Projekt Mowa, pasja brzmienia i mowienia" />
      <meta property="og:description"  content="Projekt Mowa, pasja brzmienia i mowienia" />
      <meta name="twitter:image" content={config.siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />

</Helmet>
<Topbar />

      <section className="hero myhero">
      
    <div className="container has-text-centered">
    <div className="biglogo">
              <img src={logo} alt="Projekt Mowa" className="logo" />
               <div className="idea">Projekt Mowa</div>
              <div className="catchphrase">Pasja brzmienia i mówienia</div>
            </div>
    </div>
    <section>
        <div className="container">
          <Navbar />
          </div>
          </section>
           
      
      </section>
      
      

      
      <section className="section">
      <div className="container">
      <div className="columns">
           <div className="column is-one-third">
             <div className="omnie_holder">

             {posts
            .filter(post => post.node.frontmatter.templateKey === 'omnie-page')
            .map(({ node: post}) => (
              <div
                className="content mycontent"
                key={post.id}
              ><Link className="omnie_title" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                <p>
                <img src={post.frontmatter.thumbnail} alt={post.frontmatter.description} />
                  
                  
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  </p>
                  <Link className="button is-small" to={post.fields.slug}>
                    Czytaj Więcej →
                  </Link>
              </div>
            ))}
              </div>

              <div className="oferta">

{posts
.filter(post => post.node.frontmatter.templateKey === 'oferta-page')
.map(({ node: post }) => (
 <div
   className="content mycontent"
   key={post.id}
 >

   <p>
     <Link className="has-text-primary" to={post.fields.slug}>
       {post.frontmatter.title}
     </Link>
     
   </p>
   <p>
     {post.excerpt}
     <br />
     <br />
     <Link className="button is-small" to={post.fields.slug}>
       Czytaj Więcej →
     </Link>
   </p>
 </div>
))}

</div>
            </div>
            

            <div className="column">
              <Slider
           
         fadeOutAnimation={true}
         mouseDragEnabled={true}
         playButtonEnabled={false}
         responsive={responsive}
         dotsDisabled={true}
         infinite={true}
          >
 
           {Slides}
             </Slider>
        </div>

      </div>
          
            


      <div className="columns">
           <div className="column">

             </div></div>
             </div>
      </section>

      <section className="section">
        <div className="container">

                 

        <div className="columns">
           <div className="column">
          <div className="content">
                     <h1 className="has-text-weight-bold is-size-2">Blog</h1>
          </div>
          </div>
          </div>
          
          
          </div>
        </section>

      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
   
  
    imageSharp (id: {regex: "/background.jpg/"}) {
    id
    children {
      id
    }
    sizes(maxWidth: 1920, quality: 90, traceSVG: { color: "#3ba3d4" })  {
    	...GatsbyImageSharpSizes_tracedSVG
    }
    
          
          
        
  }
}
`
