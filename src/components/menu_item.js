import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'

const MenuItem = (props) => (
	  <SbEditable content={props.blok}>
	    <li className="nav-item">
	      <Link className="nav-link" to={'/' + (props.blok.link.cached_url === 'home' ? '' : props.blok.link.cached_url)}>
	        {props.blok.label}
	      </Link>
	    </li>
	  </SbEditable>
)

export default MenuItem
