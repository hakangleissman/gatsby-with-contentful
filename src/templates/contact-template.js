import * as React from "react"
import useLinks from "../hooks/use-links";
const ContactTemplate = (contentfulPage) => {
    const links = useLinks();
    console.log(links);
    return (
        <main>
            <h2>{contentfulPage.title}</h2>
            <p>Contact template</p>
            <ul>
                {links.map((edge) =>{
                    return(
                       <li key={edge.node.id}><a href={edge.node.href}>{edge.node.text}</a></li>         
                    );
                })}
            </ul>
        </main>
    );
}


 

    export default ContactTemplate;