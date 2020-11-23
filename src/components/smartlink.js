import React from 'react'
import Components from './components.js';
import { Link } from 'gatsby';
import { Helmet } from "react-helmet"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import MixCloudLogoImg from "../images/mixcloud-btn.jpg"
import SoundCloudLogoImg from "../images/soundcloud-logo.png"
import PatreonLogoImg from "../images/patreon-logo.png"
import SpotifyLogoImg from "../images/spotify-logo.png"
import Styles from "./smartlink.module.css"

class Smartlink extends React.Component {                                                                             

  render() {
	  console.log(this.props.blok.mix.content);
    return(
	  <div>
    <Helmet>
       <title>{this.props.blok.head[0].title}</title>
       <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
       <meta property="og:title" content={this.props.blok.head[0].og_title}/>
       <meta property="og:description" content={this.props.blok.head[0].og_description}/>
       <meta property="og:url" content={this.props.blok.head[0].og_url}/>
       <meta property="og:type" content={this.props.blok.head[0].og_type}/>
       <meta property="og:image" content={this.props.blok.head[0].og_image.filename}/>
    </Helmet>
     <div className="container mb-3 mt-3">
         <div className="row">
             <div className="col-12 col-md-4">
               <img className="img-fluid" src={this.props.blok.cover_image.filename} alt={this.props.blok.cover_image.alt}/>
            </div>
             <div className="col-12 col-md-8">
	    	<p className="mt-sm-4 mt-md-0"><strong>DJ Nate Da Great presents...</strong></p>
                <h1 className="h2">{this.props.blok.title}</h1>
                <h2 className="h4">{this.props.blok.subtitle}</h2>
	    <div className="list-group list-group-flush">
	      { this.props.blok.mix.content.soundcloud &&
	      <OutboundLink href={this.props.blok.mix.content.soundcloud} class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
	       Listen on SoundCloud 
	       <img src={SoundCloudLogoImg} className={`img-fluid ${Styles.smartLinkBrandLogo}`}/>
	      </OutboundLink>
	      }
	      { this.props.blok.mix.content.patreon &&
	      <OutboundLink href={this.props.blok.mix.content.patreon} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
	        Support Me on Patreon
	    	<img src={PatreonLogoImg} className={`img-fluid ${Styles.smartLinkBrandLogo}`}/>
	      </OutboundLink>
	      }
	      { this.props.blok.mix.content.mixcloud_url &&
	      <OutboundLink href={this.props.blok.mix.content.mixcloud_url} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
	    	Listen on MixCloud
	    	<img src={MixCloudLogoImg} className={`img-fluid ${Styles.smartLinkBrandLogo}`}/>
	      </OutboundLink>
	      }
	      { this.props.blok.mix.content.spotify &&
	      <OutboundLink href={this.props.blok.mix.content.spotify} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank">
	    	Spotify Playlist
	    	<img src={SpotifyLogoImg} className={`img-fluid ${Styles.smartLinkBrandLogo}`}/>
	      </OutboundLink>
	      }
	    </div>
            </div>
         </div>
    </div>
	    {this.props.blok.body && this.props.blok.body.map((blok) => React.createElement(Components(blok.component), {key: blok._uid, blok: blok}))}
	 </div>
    
    );
  }

}


export default Smartlink
