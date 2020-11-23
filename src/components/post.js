import React from 'react'
import Components from './components.js';
import Menu from '../components/menu.js'
import Feature from '../components/feature.js'
import SubscribeWidget from '../components/subscribe_widget.js'
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
//import styled from "styled-components"
import Footer from './footer.js'
import HeadMeta from './head_meta.js'
import moment from 'moment';
import DjMixLinks from './dj_mix_links'
const ReactMarkdown = require('react-markdown');


/*
const Jumbotron = styled.div.attrs(props => ({
  className: "jumbotron jumbotron-fluid"
}))`
	background-image: "none";
	height:  "inherit";
	color: #fff;
	background-color: #702632;
`;
*/

class Post extends React.Component {                                                                             

  render() {
	console.log(this.props.blok.mixes);
	const mixes = this.props.blok.mixes;
  	let blok = {name: this.props.blok.title, 
  				text: (this.props.blok.subtitle) || "DJ Nate Da Great's Blog",
  				background_color: '#702632' };
    return(
	  <div>
	  	<HeadMeta title={this.props.blok.page_title} />
	    <Helmet>
	       <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
	    </Helmet>
			<Menu blok={this.props.globalMenu}></Menu>
			<Feature blok={blok}></Feature>
			<div className="container pt-5 pb-5">
				<div className="row">
		    		<div className="col-12">
		    		<nav aria-label="breadcrumb">
					  <ol className="breadcrumb">
					  	<li className="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">{this.props.blok.title}</li>
					  </ol>
					</nav>
		      		<p><em>Posted {moment(this.props.blok.date_published).format('MMMM Do YYYY')}</em></p>
		    		<ReactMarkdown source={this.props.blok.content} />
		    		</div>
				</div>
	    			{ mixes && mixes.map((val, idx) => {
				  return (
					<div className="row mt-3">
		    			<div className="col-12">
					<h3>
					  {val.content.name}
					  <p><small class="text-muted">{val.content.subtitle}</small></p>
					</h3>
	    				<DjMixLinks soundcloud={val.content.soundcloud}
					  	    mixcloud={val.content.mixcloud_url}
					  	    patreon={val.content.patreon}
					  	    spotify={val.content.spotify}
					  	    download={val.content.download_url}
					  	    download_expire={val.content.download_expire}
					  	    art={val.content.art}>
	    				</DjMixLinks>
		    			</div>
					</div>
				   )})
				}
				<div className="row">
		    		<div className="col-12 pl-0 pr-0">
		      		{this.props.blok.additional_content && this.props.blok.additional_content.map((blok) => React.createElement(Components(blok.component), {key: blok._uid, blok: blok}))}
		    		</div>
				</div>
			</div>
	    	
	  <Footer/>
	  <SubscribeWidget/>
	</div>
    
    );
  }

}

export default Post
