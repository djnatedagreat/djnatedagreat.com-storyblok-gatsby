import React from 'react'
import SbEditable from 'storyblok-react'
const ReactMarkdown = require('react-markdown')

const style = {
  borderLeft: '4px solid rgb(223, 226, 229)',
  padding: '0 16px',
  marginBottom: 16,
}


function BlockQuoteRenderer({ children }) {
  return (
      <blockquote style={style}>
        {children}
      </blockquote>
  )
}

const GenericContent = (props) => {
	return (
	  <SbEditable content={props.blok}>
	    <div className="container pt-4">
		<div className="row">
	    	<div className="col-12">
		<ReactMarkdown source={props.blok.content} renderers={{'blockquote': BlockQuoteRenderer}}/>
	    	</div>
		</div>
	      </div>
	  </SbEditable>
	)
}

export default GenericContent
