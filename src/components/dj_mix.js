import React from 'react'
import SbEditable from 'storyblok-react'
import MixCloudLogoImg from "../images/mixcloud-btn.jpg"
import SoundCloudLogoImg from "../images/soundcloud-logo.png"
import PatreonLogoImg from "../images/patreon-logo.png"
import SpotifyLogoImg from "../images/spotify-logo.png"
import { Link } from 'gatsby';
import Styles from "./smartlink.module.css"

//var moment = require('moment');
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

class DjMix extends React.Component {                                                                             

  	render() {
	console.log(this.props.blok);
		let dlExpire = parseISO(this.props.blok.download_expire);
		const now_mill = new Date().getTime();
		let expire_mill = 0; 
		if (!isNaN(dlExpire.getTime())) {
		  dlExpire.setHours(0,0,0,0);
		  expire_mill = dlExpire.getTime();
		}
		return(
		<SbEditable content={this.props.blok}>
			<div className="container pt-4">
				<div className="row">
		    		<div className="col-12">
				  <div className="list-group list-group-flush">
              			    { this.props.blok.soundcloud &&
              				<Link to={this.props.blok.soundcloud} class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
               				Listen on SoundCloud
               				<img src={SoundCloudLogoImg} className={`img-fluid ${Styles.smartLinkBrandLogo}`}/>
              				</Link>
              			    }
              			  { this.props.blok.patreon &&
              				<Link to={this.props.blok.patreon} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
                			Support Me on Patreon
                			<img src={PatreonLogoImg} className={`img-fluid ${Styles.smartLinkBrandLogo}`}/>
              				</Link>
              			  }
              			  { this.props.blok.mixcloud_url &&
              				<Link to={this.props.blok.mixcloud_url} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
                			Listen on MixCloud
                			<img src={MixCloudLogoImg} className={`img-fluid ${Styles.smartLinkBrandLogo}`}/>
              				</Link>
              			  }
              			  { this.props.blok.spotify &&
              				<Link to={this.props.blok.spotify} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
                			Spotify Playlist
                			<img src={SpotifyLogoImg} className={`img-fluid ${Styles.smartLinkBrandLogo}`}/>
              				</Link>
              			  }
				</div>
            			</div>
				</div>
				{ this.props.blok.download_url && ((expire_mill === 0) || (now_mill < expire_mill)) &&
				<div className="row">
		    		<div className="col-12">
					{ (expire_mill === 0) &&
					<h3 className="h5">Download</h3>
					}
					{ (expire_mill > 0) &&
					<h3 className="h5">Download (Available until {format(dlExpire,"iiii, MMMM do yyyy")})</h3>
					}
		  			<a className="btn btn-secondary" href={this.props.blok.download_url} role="button">Download</a>
		  			<p className="mt-2"><em>Click ...  on the player for the download.</em></p>
		  			</div>
				</div>
				}
			</div>
		</SbEditable>
		);
	}

}

export default DjMix
