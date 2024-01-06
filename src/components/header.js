import * as React from "react"
import { Link } from "gatsby"
import useTopNavigation from '../hooks/use-top-navigation';


const Header = ({ siteTitle }) => {
  const topNavigation = useTopNavigation();
  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <nav>
        <ul class="nav">
          {topNavigation.map(({node}, index) => {
            
            return (
              <li className="nav-item margin-right" key={index}>
                <Link to={node.url}>{node.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
