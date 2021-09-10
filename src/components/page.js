import React from 'react'
import Components from './components.js';
import SubscribeWidget from './subscribe_widget.js';
import Menu from '../components/menu.js'
import { Helmet } from "react-helmet"
import Footer from './footer.js'
import HeadMeta from './head_meta.js'

class Page extends React.Component {                                                                             

  render() {
    return(
	  <div>
    <HeadMeta title={this.props.blok.page_title} />
    <Helmet>
    </Helmet>
      <Menu blok={this.props.globalMenu} fixed="no"></Menu>
	    {this.props.blok.body && this.props.blok.body.map((blok) => React.createElement(Components(blok.component), {key: blok._uid, blok: blok}))}
	   <Footer/>
	   <SubscribeWidget/>
	 </div>
    
    );
  }

}

//const Page = (props) => (
//)

export default Page
