import React from 'react'
import Components from './components.js';

const Page = (props) => (
	  <div>
	    {props.blok.body && props.blok.body.map((blok) => React.createElement(Components(blok.component), {key: blok._uid, blok: blok}))}
	  <footer>
		DJ Nate Da Great<br/>
		<a href="https://instagram.com/djnatedagreat" target="djnatedagreat_instagram">Instagram: @djnatedagreat</a><br/>
		<a href="https://open.spotify.com/user/djnatedagreat" target="djnatedagreat_spotify">Spotify: @djnatedagreat</a><br/>
		<a href="https://www.mixcloud.com/natedagreat" target="djnatedagreat_mixcloud">Mixcloud</a><br/>
	  </footer>
	  </div>
)

export default Page
