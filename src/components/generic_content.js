import React from 'react'
import SbEditable from 'storyblok-react'
const ReactMarkdown = require('react-markdown')


const GenericContent = (props) => {
	return (
	  <SbEditable content={props.blok}>
	    <div className="container pt-4">
		<div className="row">
	    	<div className="col-12">
		<ReactMarkdown source={props.blok.content} />
	    	</div>
		</div>
	      </div>
	  </SbEditable>
	)
}

export default GenericContent
