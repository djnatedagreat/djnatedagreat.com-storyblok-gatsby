import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import MixCloudLogoImg from "../images/mixcloud-btn.jpg"
import SoundCloudLogoImg from "../images/soundcloud-logo.png"
import PatreonLogoImg from "../images/patreon-logo.png"
import SpotifyLogoImg from "../images/spotify-logo.png"
import Styles from "./smartlink.module.css"

var moment = require('moment');

class DjMixLinks extends React.Component {

  	render() {
		var dlExpire = moment(this.props.download_expire);
		console.log(this.props.download_expire);
		return(
		<div className="container">
		  <div className="row mx-sm-n4">
	            { this.props.art &&
		    <div className="col-12 col-md-4 px-sm-2">
	              <img className="img-fluid" src={this.props.art.filename} 
					         alt={this.props.art.alt}/>
		    </div>
		    }
		    <div className="col-12 col-md-6 px-sm-0">
	              <div className="list-group list-group-flush">
	                { this.props.soundcloud &&
	                  <OutboundLink href={this.props.soundcloud} class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
	                  Listen on SoundCloud 
	                  <img src={SoundCloudLogoImg} className={`img-fluid ${Styles.smartLinkBrandLogo}`}/>
	                  </OutboundLink>
	                }
	      { this.props.patreon &&
	      <OutboundLink href={this.props.patreon} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
	        Show me some ❤️ on Patreon
	    	<img src={PatreonLogoImg} className={`img-fluid ${Styles.smartLinkBrandLogo}`}/>
	      </OutboundLink>
	      }
	      { this.props.mixcloud &&
	      <OutboundLink href={this.props.mixcloud} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
	    	Listen on MixCloud
	    	<img src={MixCloudLogoImg} className={`img-fluid ${Styles.smartLinkBrandLogo}`}/>
	      </OutboundLink>
	      }
	      { this.props.spotify &&
	      <OutboundLink href={this.props.spotify} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
	    	Spotify Playlist
	    	<img src={SpotifyLogoImg} className={`img-fluid ${Styles.smartLinkBrandLogo}`}/>
	      </OutboundLink>
	      }
	      { moment().add(-1,"days").diff(dlExpire) < 0 &&
	      <OutboundLink href={this.props.download} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
	        Direct Download	
		<p className="h5">Download (Available until {dlExpire.format("dddd, MMMM Do YYYY")})</p>
		<p className="mt-2"><em>Click <FontAwesomeIcon icon={faEllipsisV} /> on the player for the download.</em></p>
	      </OutboundLink>
	      }
	        </div>
	     </div>
	   </div>
	</div>
		);
	}

}

export default DjMixLinks
