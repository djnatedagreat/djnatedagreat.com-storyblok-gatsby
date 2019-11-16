import Page from './page'
import Grid from './grid'
import Teaser from './teaser'
import Hero from './hero'
import Feature from './feature'
import Menu from './menu'
import MenuItem from './menu_item'
import GenericContent from './generic_content'
import ContactForm from './forms/contact'
import ComponentNotFound from './component_not_found'

const ComponentList = {
	  page: Page,
	  grid: Grid,
	  teaser: Teaser,
	  feature: Feature,
	  hero: Hero,
	  menu: Menu,
	  menu_item: MenuItem,
	  contact_form: ContactForm,
	  generic_content: GenericContent
}

const Components = (type) => {
	  if (typeof ComponentList[type] === 'undefined') {
		      return ComponentNotFound
		    }
	  return ComponentList[type]
}

export default Components

