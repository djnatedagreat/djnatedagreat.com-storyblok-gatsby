import React from 'react'
import Components from './components.js';
import Menu from '../components/menu.js'
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Footer from './footer.js'
import moment from 'moment';
const ReactMarkdown = require('react-markdown');


const Jumbotron = styled.div.attrs(props => ({
  className: "jumbotron jumbotron-fluid"
}))`
	background-image: "none";
	height:  "inherit";
	color: #fff;
	background-color: #702632;
`;

class Post extends React.Component {                                                                             
   constructor(props) {
   	//var globalMenu = Object.assign({}, props.pageContext.globalMenu)
	//globalMenu.content = JSON.parse(globalMenu.content)
	//this.state = {
	//				globalMenu : globalMenu
    //   		 	};
	super(props);
   }

  render() {
    return(
	  <div>
			<Helmet>
	          <meta charSet="utf-8" />
	          <title>{this.props.blok.page_title}</title>
			</Helmet>
			<Menu blok={this.props.globalMenu}></Menu>
			<Jumbotron className="m-0">
			<div className="container">
				<div className="row">
		    		<div className="col-12 col-md-6">
		      			<h1 className="h2">{this.props.blok.title}</h1>
		      			<p>{ (this.props.blok.subtitle) || "DJ Nate Da Great's Blog" }</p>
		    		</div>
				</div>
			</div>
			</Jumbotron>
			<div className="container pt-5 pb-5">
				<div className="row">
		    		<div className="col-12">
		      		<p>{this.props.blok.subtitle}</p>
		      		<p><em>Posted {moment(this.props.blok.date_published).format('MMMM Do YYYY')}</em></p>
		    		<ReactMarkdown source={this.props.blok.content} />
		    		</div>
				</div>
				<div className="row">
		    		<div className="col-12 pl-0 pr-0">
		      		{this.props.blok.additional_content && this.props.blok.additional_content.map((blok) => React.createElement(Components(blok.component), {key: blok._uid, blok: blok}))}
		    		</div>
				</div>
			</div>
	    	
	  <Footer/>
	</div>
    
    );
  }

}

export default Post
