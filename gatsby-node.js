const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  
  const { createPage } = actions;
  
  const response = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  //lägg till en ny graphql-hämtning av pages här om du fortsätter att använda detta API för pages
  //du behöver även kod för responsen från denna query, som den nedan
  //kolla värdet av template i metoden för kod av responsen för att kunna skapa sidor med olika templates
  //använd switch-statement enklast
  response.data.allContentfulPost.edges.forEach((edge) => {
    
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve('./src/templates/portfolio-item.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};