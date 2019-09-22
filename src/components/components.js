import Page from './page'
import Grid from './grid'
import Teaser from './teaser'
import Hero from './hero'
import Feature from './feature'
import ComponentNotFound from './component_not_found'

const ComponentList = {
	  page: Page,
	  grid: Grid,
	  teaser: Teaser,
	  feature: Feature,
	  hero: Hero
}

const Components = (type) => {
	  if (typeof ComponentList[type] === 'undefined') {
		      return ComponentNotFound
		    }
	  return ComponentList[type]
}

export default Components

