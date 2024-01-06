import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
const useLinks = () => {
    const {allContentfulLink} = useStaticQuery(graphql`
    query {
      allContentfulLink {
        edges {
          node {
            href
            text
            name
            id
          }
        }
      }
    }
  `);
    return allContentfulLink.edges;
}
 
export default useLinks;