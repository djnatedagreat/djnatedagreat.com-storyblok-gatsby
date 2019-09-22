import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'
import styled from "styled-components"
import ("./hero.scss")

const Jumbotron = styled.div.attrs(props => ({
  class: "jumbotron jumbotron-fluid"
}))`
	background-image: url( ${props => props.media} );
	height: ${props => props.type == 'home' ? "100vh" : "inherit"};
	background-position: center;
	background-size: cover;
	padding-top: 15vh;
`;

const Hero = (props) => {
	return (
	  <SbEditable content={props.blok}>
	    <Jumbotron media={props.blok.media} type={props.blok.type}>
	      <div className="container">
		{ props.blok.type == 'home' && props.blok.title &&
	           <h1 className="display-4 brand-font">{ props.blok.title }</h1>
		}
		{ props.blok.type != 'home' && props.blok.title &&
	           <h1 className="display-4">{ props.blok.title }</h1>
		}
	        <p className="lead">{props.blok.subtitle}</p>
		{ props.blok.call_to_action_btn &&
	        <p className="lead">
	          <Link className="btn btn-primary" to={'/blog/'}>
	            Blog Posts
	          </Link>
	        </p>
		}
	      </div>
	    </Jumbotron>
	  </SbEditable>
	)
}

	    //<div className="jumbotron jumbotron-fluid" style={{ backgroundImage: props.blok.media }}>
	    //</div>
export default Hero
