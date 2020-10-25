import React from 'react'
//import Components from './components.js';
import { Link } from "gatsby"
import moment from 'moment';
const ReactMarkdown = require('react-markdown');

class BlogPostTeaser extends React.Component {
  
  	render() {
  		
		console.log(this.props);
      return (
            <div className="container">
				<div className="row">
		    		<div className="col-12 pl-0 pb-5">
		      			<h2><Link to={'/'+this.props.url}>{this.props.title}</Link></h2>
		      			<p><strong>{this.props.subtitle}</strong></p>
		      			<p><em>Posted {moment(this.props.date).format('MMMM Do YYYY')}</em></p>
		      			<ReactMarkdown source={this.props.teaser} />
		      			<p><Link to={'/'+this.props.url}>Full Post... </Link></p>
		    		</div>
				</div>
			</div>
      )
    }
}

export default BlogPostTeaser
