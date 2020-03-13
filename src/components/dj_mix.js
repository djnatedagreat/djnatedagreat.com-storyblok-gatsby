import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

var moment = require('moment');

class DjMix extends React.Component {                                                                             
   constructor(props) {
	super(props);
   }

  	render() {
		var dlExpire = moment(this.props.blok.download_expire);
		console.log(this.props.blok.download_url);
		return(
		<SbEditable content={this.props.blok}>
			<div className="container pt-4">
				<div className="row">
		    		<div className="col-12">
		    		<h3 className="h5">Listen on Mixcloud</h3>
		  			<iframe width="100%" className="embed-responsive-item" src={ this.props.blok.mixcloud_url } frameborder="0" ></iframe>
		  			</div>
				</div>
				{ moment().add(-1,"days").diff(dlExpire) < 0 &&
				<div className="row">
		    		<div className="col-12">
					<h3 className="h5">Download (Available until {dlExpire.format("dddd, MMMM Do YYYY")})</h3>
		  			<a className="btn btn-secondary" href={this.props.blok.download_url} role="button"><FontAwesomeIcon icon={faCloudDownloadAlt} /> Download</a>
		  			<p className="mt-2"><em>Click <FontAwesomeIcon icon={faEllipsisV} /> on the player for the download.</em></p>
		  			</div>
				</div>
				}
			</div>
		</SbEditable>
		);
	}

}

export default DjMix