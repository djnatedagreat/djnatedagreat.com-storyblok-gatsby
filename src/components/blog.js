import React from 'react'
import Components from './components.js';
import SubscribeWidget from './subscribe_widget.js';
import Menu from '../components/menu.js'
import { Helmet } from "react-helmet"
import Footer from '../components/footer.js'
import styled from "styled-components"
import BlogPostTeaser from "./blog_post_teaser.js"

const Jumbotron = styled.div.attrs(props => ({
  className: "jumbotron jumbotron-fluid"
}))`
	background-image: "none";
	height:  "inherit";
	color: #fff;
	background-color: #702632;
`;

class Blog extends React.Component {                                                                             
   constructor(props) {
   	//console.log(props.pageContext);
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
	          <title>DJ Nate Da Great - Blog</title>
			</Helmet>
			<Menu blok={this.props.globalMenu}></Menu>
			<Jumbotron className="m-0">
			<div className="container">
				<div className="row">
		    		<div className="col-12 col-md-6">
		      			<p className="h2">DJ Nate Da Great's Blog</p>
		      			<p>Music, mixes and musings</p>
		    		</div>
				</div>
			</div>
			</Jumbotron>
			<div className="container pt-4">
				<div className="row">
		    		<div className="col-12">
		      		{this.props.posts.map((item, key) =>
    				<BlogPostTeaser key={item._uid} title={item.title} date={item.date_published} teaser={item.teaser} url={item.full_slug}/>
					)}
		    		</div>
				</div>
			</div>
	  <Footer/>
	</div>
    
    );
  }

}

export default Blog