/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
      const storyblokEntry = path.resolve('src/templates/storyblok-entry.js')

      resolve(
         graphql(
            `{
              allStoryblokEntry {
                  edges {
	                node {
		                id
		                name
		                created_at
		                uuid
		                slug
				field_component
		                full_slug
		                content
		                is_startpage
		                parent_id
		                group_id
		              }
	              }
                }
            }`
          ).then(result => {
	          if (result.errors) {
		            console.log(result.errors)
		            reject(result.errors)
	          }

	          const entries = result.data.allStoryblokEntry.edges
		  const contents = entries.filter((entry) => {
		      return entry.node.field_component != 'menu'
	          })
	          entries.forEach((entry, index) => {
	             let pagePath = entry.node.full_slug == 'home' ? '' : `${entry.node.full_slug}/`
		     const globalMenu = entries.filter((globalEntry) => {
		    	return globalEntry.node.field_component == 'menu' && globalEntry.node.lang == entry.node.lang
		     })
		     if (!globalMenu.length) {
		        throw new Error('The global Menu item has not been found. Please create a content item with the content type menu in Storyblok.')
		     }

	            createPage({
	                path: `/${pagePath}`,
	                component: storyblokEntry,
	                context: {
			    globalMenu: globalMenu[0].node,
		            story: entry.node
   	                }
		    })
                 })
        })
       )
    })
}
