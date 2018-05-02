import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'


const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    thumbnail={entry.getIn(['data', 'thumbnail' ])}
    slug={entry.getIn(['data', 'slug' ])}
    helmet={entry.getIn(['data', 'title'])}
    date={entry.getIn(['data',"date"])}
    
    postNode={{
      frontmatter: {
        description: entry.getIn(['data', 'description']),
        title: entry.getIn(['data', 'title']),
        thumbnail: entry.getIn(['data', 'thumbnail' ]),
        date: entry.getIn(['data', 'date']),
      }  

      }}

    OtherPosts={{
      edges: [
        {node: {
          children: [],
          excerpt: "Wiecej tekstu ............",
          fields: {
            slug: "/blog/2018-04-29-kolejne-niesmowity-wpis/"
          }, 
          frontmatter: {
            title: "Kolejne niesamowity wpis",
            thumbnail: "/img/aron-visuals-54965-unsplash.jpg",
            description: "i kolejny niesamowity fajny krotki opis",
            templateKey: "blog-post",
            date: "Kwiecień 29, 2018"
          }
        } 
        
        }, 
        {node: {
          children: [],
          excerpt: "Warto Zaczac od naglowka (przycisk H1) potem mamy h2 na mniejsze tytuly sekcji **Zgrubienie tekstu ** Kursywa tekst normalny  cytat: o ktorym jeszcze nie slyszalas  lista dssd fsd numerowana lista  jeden dwa aby dodac zdjecie wcisnij plus > image (warto wpisywac alt tekst) tagi, odzielamy przecinkiem np:  logopedia, radio, zycie",
          fields: {
            slug: "/blog/2018-04-29-swietny-pomysł-na-wpis/"
          }, 
          frontmatter: {
            title: "Swietny pomysł na wpis",
            thumbnail: "/img/marcus-castro-309376-unsplash.jpg",
            description: "A to jest swietny ktortki opis ktory pojawia się na takze na glownej stronie (slider)",
            templateKey: "blog-post",
            date: "Kwiecień 29, 2018"
          }
        } 
        
        },
        {node: {
          children: [],
          excerpt: "Warto Zaczac od naglowka (przycisk H1) potem mamy h2 na mniejsze tytuly sekcji **Zgrubienie tekstu ** Kursywa tekst normalny  cytat: o ktorym jeszcze nie slyszalas  lista dssd fsd numerowana lista  jeden dwa aby dodac zdjecie wcisnij plus > image (warto wpisywac alt tekst) tagi, odzielamy przecinkiem np:  logopedia, radio, zycie",
          fields: {
            slug: "/blog/2018-04-29-logopedia-w-radiu/"
          }, 
          frontmatter: {
            title: "Logopedia",
            thumbnail: "/img/bogomil-mihaylov-519207-unsplash.jpg",
            description: "A to jest swietny ktortki opis ktory pojawia się na takze na glownej stronie (slider)",
            templateKey: "blog-post",
            date: "Kwiecień 29, 2018"
          }
        } 
        
        }


      ]
    }}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview