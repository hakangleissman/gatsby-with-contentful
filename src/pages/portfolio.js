import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from "../components/layout"
import Seo from "../components/seo"
import { richTextConfig } from "../util/utils";
import { renderRichText } from 'gatsby-source-contentful/rich-text'


//CFPAT-09lQYd7FcSH_ZOcarLlB3UdL3RVXRkpPie3CV-xD4SA
const SecondPage = () => {
  const data = useStaticQuery(graphql`
  query {
allContentfulPost {
  edges {
    node {
      title
      slug
      desc{
        desc
      }
      description{        
        description
        
      }
      content {
        raw
      }
      heroImage {
        gatsbyImage(width:400)
      }
    }
  }
}
}
`
  )
  return (
    <Layout>
      <h1>Portfolio page</h1>

      <ul>
      
        {data.allContentfulPost.edges.map((edge) => {
          return(
            
             <li key={edge.node.id}>
             <Link to={edge.node.slug}> <h2>{edge.node.title}</h2></Link>
                {edge.node.heroImage  && <GatsbyImage alt={edge.node.title} image={edge.node.heroImage.gatsbyImage}/>}
               <p>{edge.node.desc.desc}</p>
               <p>{renderRichText(edge.node.content, richTextConfig)}</p>
              </li>
             
          );
        })}
        
      </ul>

    
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )

}









export const Head = () => <Seo title="Page two" />

export default SecondPage


