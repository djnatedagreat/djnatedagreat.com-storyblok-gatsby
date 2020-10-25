import React from 'react'
import SbEditable from 'storyblok-react'

const SpotifyPlaylist = (props) => (
	<SbEditable content={props.blok}>
		<div className="container pt-4">
			<div className="row">
	    		<div className="col-12">
	  			<div className="embed-responsive embed-responsive-16by9">
	  			<iframe title="spotify playlist" src={ props.blok.embed_url } className="embed-responsive-item" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
	  			</div>
	  			</div>
			</div>
		</div>
	</SbEditable>
)

export default SpotifyPlaylist
