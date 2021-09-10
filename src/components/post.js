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
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
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
  	let blok = {name: this.props.blok.title, 
  				text: (this.props.blok.subtitle) || "DJ Nate Da Great's Blog",
  				background_color: '#702632' };
    return(
	  <div>
	  	<HeadMeta title={this.props.blok.page_title} />
	    <Helmet>
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
		      		<p><em>Posted {format(parseISO(this.props.blok.date_published), 'MMMM do yyyy')}</em></p>
		    		<ReactMarkdown source={this.props.blok.content} />
		    		</div>
				</div>
				<div className="row">
		    		<div className="col-12 pl-0 pr-0">
		      		{this.props.blok.additional_content && this.props.blok.additional_content.map((blok) => React.createElement(Components(blok.component), {key: blok._uid, blok: blok}))}
		    		</div>
		    		<div className="col-12 pl-0 pr-0">
		      		{this.props.blok.mixes && this.props.blok.mixes.map((blok) => React.createElement(Components(blok.content.component), {key: blok.content._uid, blok: blok.content}))}
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
