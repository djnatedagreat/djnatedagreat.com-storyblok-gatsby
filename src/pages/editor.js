import React from 'react'
import Components from '../components/components.js'
import SbEditable from 'storyblok-react'
import config from '../../gatsby-config'
import Menu from '../components/menu.js'

const loadStoryblokBridge = function(cb) {
	  let sbConfigs = config.plugins.filter((item) => {
		      return item.resolve === 'gatsby-source-storyblok'
		    })
	  let sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}
	  let script = document.createElement('script')
	  script.type = 'text/javascript'
	  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`
	  script.onload = cb
	  document.getElementsByTagName('head')[0].appendChild(script)
}

const getParam = function(val) {
	  var result = ''
	  var tmp = []
	  if (typeof window !== 'undefined') {
	  window.location.search
	    .substr(1)
	    .split('&')
	    .forEach(function (item) {
		          tmp = item.split('=')
		          if (tmp[0] === val) {
				          result = decodeURIComponent(tmp[1])
				        }
		        })
	  }
	  return result
}

class StoryblokEntry extends React.Component {
	  constructor(props) {
		      super(props)
		      this.state = {story: null, globalMenu: {content: {}}}
		    }

	  componentDidMount() {
		      loadStoryblokBridge(() => { this.initStoryblokEvents() })
		    }

	loadStory(payload) {
	      if (typeof window !== 'undefined') {
	      window.storyblok.get({
	            slug: getParam('path'),
	            version: 'draft'
	      }, (data) => {
	  		this.loadGlovalMenu(data.story.lang)
	        this.setState({story: data.story})
	     })
	  	}
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


	  initStoryblokEvents() {
		      this.loadStory({storyId: getParam('path')})

		      let sb = window.storyblok

		      sb.on(['change', 'published'], (payload) => {
			            this.loadStory(payload)
			          })

		      sb.on('input', (payload) => {
			            if (this.state.story && payload.story.id === this.state.story.id) {
					            payload.story.content = sb.addComments(payload.story.content, payload.story.id)
					            this.setState({story: payload.story})
					          }
			          })

		      sb.pingEditor(() => {
			            if (sb.inEditor) {
					            sb.enterEditmode()
					          }
			          })
		    }

	  render() {
		      if (this.state.story == null) {
			            return (<div></div>)
			          }

		  console.log(this.state);
		      let content = this.state.story.content
		      let globalMenu = this.state.globalMenu.content

		      return (
			            <SbEditable content={content}>
			            <div>
			      	      <Menu blok={globalMenu}></Menu>
			              {React.createElement(Components(content.component), {key: content._uid, blok: content, globalMenu: globalMenu})}
			            </div>
			            </SbEditable>
			          )
		    }
}

export default StoryblokEntry
