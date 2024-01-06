import * as React from "react"
import Seo from "../components/seo"
const AboutTemplate = (contentfulPage) => {
    return ( 
        <>
            <h2>{contentfulPage.title}</h2>
            <p>About template</p>
        </>
     );
}
 
export default AboutTemplate;

//export const Head = () => <Seo title="About" />