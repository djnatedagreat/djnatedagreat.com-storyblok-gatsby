import React from 'react'
import { graphql } from 'gatsby'
//import Components from '../components/components.js'
//import config from '../../gatsby-config'
//import Menu from '../components/menu.js'
import Blog from '../components/blog.js'
import parseISO from 'date-fns/parseISO';


class BlogPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {story: null, globalMenu: {content: {}}}
	}

	componentDidMount() {
	}

	loadGlovalMenu(lang) {
		    const language = lang === 'default' ? '' : lang + '/';
		    if (typeof window !== 'undefined') {
		    window.storyblok.get({
			          slug: `${language}main-menu`, 
			          version: 'draft'
		    }, (data) => {
		      this.setState({globalMenu: data.story})
		   })
			}
       }


	  
	render(data) {
		
		let globalMenu = this.props.data.allStoryblokEntry.edges.filter((entry) => {
			    return entry.node.field_component === 'menu'
		})
		let posts = this.props.data.allStoryblokEntry.edges.filter((entry) => {
			    return entry.node.field_component === 'post'
		})
		let postContents = posts.map((post) => {
				var content = JSON.parse(post.node.content);
				content.full_slug = post.node.full_slug;
				return content;
				//return JSON.parse(post.node.content)
		}).sort((a,b) => {
				return  parseISO(b.date_published) - parseISO(a.date_published)
		})

		return (<div><Blog globalMenu={JSON.parse(globalMenu[0].node.content)} posts={postContents}/></div>)
	}
}

export default BlogPage


export const query = graphql`
  query {
	  allStoryblokEntry(filter: {field_component: {in: ["post","menu"]}}) {
	    edges {
	      node {
	        id
	        content
	        field_component
	        full_slug
	      }
	    }
	  }
  }
`
