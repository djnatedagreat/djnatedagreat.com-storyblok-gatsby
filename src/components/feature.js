import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'
import styled from "styled-components"
//import LazyImage from './lazy_image.js'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Jumbotron = styled.div.attrs(props => ({
  className: "jumbotron jumbotron-fluid"
}))`
	background-image: url( ${props => props.media ? props.media : "none" } );
	height: ${props => props.type === 'home' ? "100vh" : "inherit"};
	background-color: ${props => props.background_color || "#080705"};
	color: white;
	background-position: center;
	background-size: cover;
	padding: 5em 0;
`;

const CallToAction = (props) => {

    
    console.log('CALLLLL TOOOOO ACCCCTTTTIOIOIOIOIOIOION');
    console.log(props.action);
    let cta = props.action;
    if (cta && cta.cached_url) {
        if (cta.linktype == 'url') {
            return ( <a className="btn btn-primary" href={cta.cached_url}>{props.label}</a> )
        } else {
            return ( <Link className="btn btn-primary" to={cta.cached_url}>{props.label}</Link> )
        }
    } else {
     return (null);
    }

}

const Feature = (props) => {

	console.log('aaa');
	console.log(props.blok);
	console.log('aaa');
	return (
	  <SbEditable content={props.blok}>
	    <Jumbotron className="m-0" media={props.blok.media} type={props.blok.type} background_color={props.blok.background_color}>
	      <div className="container">
			<div className="row">
	    		<div className="col-12 col-md-6">
		      		<h1 className="h2">{props.blok.name}</h1>
		      		<p>{props.blok.text}</p>
				{ props.blok.call_to_action_url &&
			        <CallToAction action={props.blok.call_to_action_url} label={props.blok.call_to_action_label}/>
				}
		    	</div>
	    		
				{ props.blok.media &&
				<div className="col-12 col-md-6">
					<LazyLoadImage
					class="img-fluid"
					placeholderSrc={props.blok.media[0].facade_image.filename}
      					alt={props.blok.media[0].fullsize_image.alt}
      					src={props.blok.media[0].fullsize_image.filename}/>
				</div>
				}
				{ (props.blok.video && (! props.blok.media)) && 
				<div className="col-12 col-md-6">
				  <div className="embed-responsive embed-responsive-16by9">
				    <iframe src={props.blok.video} loading="lazy" className="embed-responsive-item" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
				  </div>
				</div>
				}
	    		
				
			</div>
	      </div>
	    </Jumbotron>
	  </SbEditable>
	)
}

export default Feature
