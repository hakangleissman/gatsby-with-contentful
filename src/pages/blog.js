import React, { useState } from 'react';
import { graphql } from 'gatsby';
//filtrera portfolio-items på kategori
const BlogPosts = ( props ) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const allPosts = props.data.allContentfulPage.edges;
   
    const categories = ['All', ...new Set(allPosts.map(post => post.node.template))];
    console.log(categories);
    const filteredPosts = selectedCategory === 'All'
        ? allPosts
        : allPosts.filter(post => post.node.template === selectedCategory);
    return (
        <div>
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <div>
                {filteredPosts.map(({ node }, index) => (
                    <div key={index}>
                        <h2>{node.title} with template: {node.template}</h2>
                        
                        {/* ... other post details ... */}
                    </div>
                ))}
            </div>
        </div>
    );
};
export const query = graphql`
  query {
    allContentfulPage {
      edges {
        node {
          title
          template
        }
      }
    }
  }
`
export default BlogPosts;






