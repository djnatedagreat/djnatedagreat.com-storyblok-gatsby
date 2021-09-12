import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'
import styled from "styled-components"
import "./hero.scss"

function rgx(str0){
  var reg1 = new RegExp(`a\.storyblok\.com`, 'gi')
  var reg2 = new RegExp(`\.com\/f\/`, 'gi')
  return str0.replace(reg1, 'img2.storyblok.com').replace(reg2, '.com/600x0/f/');
}

const Jumbotron = styled.div.attrs(props => ({
  className: "hero hero__Jumbotron jumbotron jumbotron-fluid"
}))`
	/*background-image: url( ${props => props.media} );*/
	height: ${props => props.type == 'home' ? "95vh" : "inherit"};
	background-position: center 0;
	background-size: cover;
	/*padding-top: 15vh;*/
	color: #fff;
        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
          background-image: url( ${props => props.media ? rgx(props.media) : "none" } );
        }
        /* Larger Devices (large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          background-image: url( ${props => props.media ? props.media : "none" } );
        }
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


export default Hero
