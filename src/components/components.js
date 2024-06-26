import Page from './page'
import Post from './post'
import Smartlink from './smartlink'
import Grid from './grid'
import Teaser from './teaser'
import Hero from './hero'
import Feature from './feature'
import Menu from './menu'
import MenuItem from './menu_item'
import GenericContent from './generic_content'
import ContactForm from './forms/contact'
import SubscribeForm from './subscribe_form'
import SpotifyPlaylist from './spotify_playlist'
import DjMix from './dj_mix'
import ComponentNotFound from './component_not_found'

const ComponentList = {
	  page: Page,
	  post: Post,
	  smartlink: Smartlink,
	  grid: Grid,
	  teaser: Teaser,
	  feature: Feature,
	  hero: Hero,
	  menu: Menu,
	  menu_item: MenuItem,
	  contact_form: ContactForm,
	  generic_content: GenericContent,
	  spotify_playlist: SpotifyPlaylist,
	  dj_mix: DjMix,
	  subscribe_form: SubscribeForm
}

const Components = (type) => {
	  if (typeof ComponentList[type] === 'undefined') {
		      return ComponentNotFound
		    }
	  return ComponentList[type]
}

export default Components

