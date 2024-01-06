import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import AboutTemplate from '../templates/about-template';
import HomeTemplate from '../templates/home-template';
import PortfolioTemplate from '../templates/portfolio-template';
import ContactTemplate from '../templates/contact-template';

//React-komponent, som vanligt, props innehåller data från graphQl-queryn nedan
const Page = (props) => {
  //data från graphQL-queryn nedan ligger i props.data
  const { data } = props;
  const { contentfulPage } = data;
  const getTemplate = (contentfulPage) => {
    switch (contentfulPage.template) {
      case 'about':
        return <AboutTemplate {...contentfulPage} />;
      case 'portfolio':
        return <PortfolioTemplate {...contentfulPage} />;
      case 'contact':
        return <ContactTemplate {...contentfulPage} />;
      default:
        return <HomeTemplate {...contentfulPage} />;
    }
  };
  return (<Layout>{getTemplate(contentfulPage)}</Layout>);
};
//page-query som efterfrågar en page med ett visst ID
//ID:t skickas automatiskt in till denna javascript-fil under build-time
//eftersom det bara är en page som efterfrågas finns det inget edges och nodes
//bara värden direkt under contentfulPage
export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      title
     
      template
      
    }
  }
`;
export default Page;