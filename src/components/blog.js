import React from 'react'
//import Components from  './components.js';
import SubscribeWidget from './subscribe_widget.js';
import Menu from '../components/menu.js'
import Feature from '../components/feature.js'
import { Helmet } from "react-helmet"
import Footer from '../components/footer.js'
import BlogPostTeaser from "./blog_post_teaser.js"


class Blog extends React.Component {                                                                             

  render() {
  	let blok = {name: "DJ Nate Da Great's Blog", 
  				text: "Music, mixes and musings",
  				background_color: '#702632' };
    return(
	  <div>
			<Helmet>
	          <meta charSet="utf-8" />
	          <title>DJ Nate Da Great - Blog</title>
			</Helmet>
			<Menu blok={this.props.globalMenu}></Menu>
			<Feature blok={blok}></Feature>
			<div className="container pt-4">
				<div className="row">
		    		<div className="col-12">
		      		{this.props.posts.map((item, key) =>
    				<BlogPostTeaser key={item._uid} title={item.title} subtitle={item.subtitle} date={item.date_published} teaser={item.teaser} url={item.full_slug}/>
					)}
		    		</div>
				</div>
			</div>
	  <Footer/>
	  <SubscribeWidget/>
	</div>
    
    );
  }

}

export default Blog
