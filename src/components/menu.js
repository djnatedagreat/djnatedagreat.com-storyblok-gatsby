import React from 'react'
import Components from './components.js';

const Menu = (props) => (
	  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" id="main-menu">
	    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	      <span className="navbar-toggler-icon"></span>
	    </button>
	    <div className="collapse navbar-collapse" id="navbarNav">
	      <ul className="navbar-nav">
	        {props.blok.menu_items && props.blok.menu_items.map((blok) => React.createElement(Components(blok.component), {key: blok._uid, blok: blok}))}
	      </ul>
	    </div>
	  </nav>
)

export default Menu
