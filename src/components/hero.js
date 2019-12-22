import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'
import styled from "styled-components"
import ("./hero.scss")

const Jumbotron = styled.div.attrs(props => ({
  className: "hero hero__Jumbotron jumbotron jumbotron-fluid"
}))`
	background-image: url( ${props => props.media} );
	height: ${props => props.type == 'home' ? "100vh" : "inherit"};
	background-position: center;
	background-size: cover;
	padding-top: 15vh;
	color: #fff;
`;

const Hero = (props) => {
	return (
	  <SbEditable content={props.blok}>
	    <Jumbotron className="m-0" media={props.blok.media} type={props.blok.type}>
	      <div className="container">
	      	<div className="row">
	      		<div className="col-sm-5 text-center">
      				{ props.blok.type == 'home' && props.blok.title &&
				           <h1 className="display-5 brand-font">{ props.blok.title }</h1>
					}
					{ props.blok.type != 'home' && props.blok.title &&
				           <h1 className="display-4">{ props.blok.title }</h1>
					}
				        <p className="lead display-6"><strong>{props.blok.subtitle}</strong></p>
					{ props.blok.call_to_action_btn &&
				        <p className="lead">
				          <Link className="btn btn-primary" to={'/blog/'}>
				            Blog Posts
				          </Link>
				        </p>
					}
    			</div>		
			</div>
	      </div>
	    </Jumbotron>
	  </SbEditable>
	)
}

	    //<div className="jumbotron jumbotron-fluid" style={{ backgroundImage: props.blok.media }}>
	    //</div>
export default Hero
