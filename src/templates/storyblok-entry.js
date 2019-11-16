import React from 'react'
import Components from '../components/components.js'
import Menu from '../components/menu.js'

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
      if (state.story.uuid === props.pageContext.story.uuid) {
            return null
          }

      return StoryblokEntry.prepareStory(props)
    }

  static prepareStory(props) {
      const story = Object.assign({}, props.pageContext.story)
	  const globalMenu = Object.assign({}, props.pageContext.globalMenu)
	      story.content = JSON.parse(story.content)
	      globalMenu.content = JSON.parse(globalMenu.content)
	      
	      return { story, globalMenu }
    }

  constructor(props) {
      super(props)
      this.state = StoryblokEntry.prepareStory(props)
    }

  render() {
      let content = this.state.story.content
      let globalMenu = this.state.globalMenu.content

      return (
            <div>
	      <Menu blok={globalMenu}></Menu>
              {React.createElement(Components(content.component), {key: content._uid, blok: content})}
            </div>
      )
    }
}

export default StoryblokEntry
