import React from 'react'
import Components from './components.js';
import SbEditable from 'storyblok-react'

const Grid = (props) => (
	  <SbEditable content={props.blok}>
	    <div className="container-fluid m-0">
	      <div className="row">
	        {props.blok.columns.map((blok) =>
				  React.createElement("div", {className: "col m-0 p-0"}, 
			            React.createElement(Components(blok.component), {key: blok._uid, blok: blok})
			 	  )
			        )}
	      </div>
	    </div>
	  </SbEditable>
)

export default Grid
