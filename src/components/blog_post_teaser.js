import React from 'react'
//import Components from './components.js';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { Link } from "gatsby"
const ReactMarkdown = require('react-markdown');

class BlogPostTeaser extends React.Component {
  
  	render() {
      return (
            <div className="container">
				<div className="row">
		    		<div className="col-12 pl-0 pb-5">
		      			<h2><Link to={'/'+this.props.url}>{this.props.title}</Link></h2>
		      			<p><strong>{this.props.subtitle}</strong></p>
		      			<p><em>Posted {format(parseISO(this.props.date), 'MMMM do yyyy')}</em></p>
		      			<ReactMarkdown source={this.props.teaser} />
		      			<p><Link to={'/'+this.props.url}>Full Post... </Link></p>
		    		</div>
				</div>
			</div>
      )
    }
}

export default BlogPostTeaser
