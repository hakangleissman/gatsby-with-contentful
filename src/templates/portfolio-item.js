import React from 'react';
import { graphql, Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image'
import { richTextConfig } from '../util/utils';


export const query = graphql`
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      desc{
        desc
      }
      richtext{
        raw
      }
      heroImage{
        gatsbyImage(width:700)
      }
     
    }
  }
`;

const portfolioItem = (props) =>  (
    <Layout>
      
      <Link to="/portfolio/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulPost.title}</h1>
       
        
          <GatsbyImage image={props.data.contentfulPost.heroImage.gatsbyImage}
            alt={props.data.contentfulPost.title} />
        
        <p>{renderRichText(props.data.contentfulPost.richtext, richTextConfig)}</p>
      </div>
    </Layout>
  );


export default portfolioItem;