import { graphql, useStaticQuery } from 'gatsby';

const useTopNavigation = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query TopNavQuery {
      allContentfulPage (sort: {url: ASC}){
        edges {
          node {
            url
            title
          }
        }
      }
    }
  `);

  return allContentfulPage.edges;
};
export default useTopNavigation;
  




/*const {allContentfulPage: { nodes }} = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: {url: ASC}) {
        nodes {
          url
          title
        }
      }
    }
  `);
  return nodes;*/


/*  const { allContentfulPage: { edges } } = useStaticQuery(graphql`
      query TopNavQuery {
        allContentfulPage {
          edges {
            node {
              url
              title
            }
          }
        }
      }
    `);
  
    return edges.map(edge => edge.node);
    */

