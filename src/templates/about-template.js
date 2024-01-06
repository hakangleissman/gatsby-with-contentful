import * as React from "react"
import Seo from "../components/seo"
const AboutTemplate = (contentfulPage) => {
    return ( 
        <main>
            <h2>{contentfulPage.title}</h2>
            <p>About template</p>
        </main>
     );
}
 
export default AboutTemplate;

//export const Head = () => <Seo title="About" />