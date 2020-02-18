import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'
import styled from "styled-components"

const Jumbotron = styled.div.attrs(props => ({
  className: "jumbotron jumbotron-fluid"
}))`
	background-image: url( ${props => props.media ? props.media : "none" } );
	height: ${props => props.type == 'home' ? "100vh" : "inherit"};
	background-color: ${props => props.background_color || "#080705"};
	color: white;
	background-position: center;
	background-size: cover;
	padding: 5em 0;
`;

const Feature = (props) => {
	return (
	  <SbEditable content={props.blok}>
	    <Jumbotron className="m-0" media={props.blok.media} type={props.blok.type} background_color={props.blok.background_color}>
	      <div className="container">
		<div className="row">
	    	<div className="col-12 col-md-6">
	      		<h1 className="h2">{props.blok.name}</h1>
	      		<p>{props.blok.text}</p>
	    	</div>
	    	<div className="col-12 col-md-6">
		{ props.blok.video &&
		  <div className="embed-responsive embed-responsive-16by9">
		    <iframe src={props.blok.video} className="embed-responsive-item" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
		  </div>
		}
	    	</div>
		{ props.blok.call_to_action_btn &&
	        <p className="lead">
	          <Link className="btn btn-primary" to={'/blog/'}>
	            Blog Posts
	          </Link>
	        </p>
		}
		</div>
	      </div>
	    </Jumbotron>
	  </SbEditable>
	)
}

export default Feature
