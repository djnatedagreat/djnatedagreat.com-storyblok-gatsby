import React from 'react';
import SubscribeForm from './subscribe_form.js';
import Cookies from 'universal-cookie';
import moment from 'moment';
import $ from 'jquery';


class SubscribeWidget extends React.Component {

	constructor(props) {
		super(props);
		
		let cookies = new Cookies();
		console.log(cookies.getAll());
		this.state = {
			date: new Date(),
			//showSuccessMsg: false,
			//showErrorMsg: false,
			//showSpinner: false,
			displayCard: false,
			cookies: cookies,
			cardStyle: {"width":"14rem","right":0, "left":"auto"},
			subscribed: false
       	};
       	this.hideWidget = this.hideWidget.bind(this);
	}


/*
   submitMethod = (model) => {
    //do something with model when submit success
	this.setState({showSpinner: true});
	let headers = new Headers({
	   'Content-Type': 'application/json',
	   "x-api-key": "NMjjGmTrGV52pxBYI40Bj1NiA4lWDWOP6JjLtlaG"
	});
	let data =  {
          name: model.name,
    	  email: model.email,
	  message: model.message
	};
	let params = {
	  method: "POST",
	  headers: headers,
	  body: JSON.stringify(data) 
	};
	if (this.props.blok.action_url) {
	  var self = this;
	  fetch(this.props.blok.action_url, params)
	  .then(function(response) {
	     self.setState({showSpinner: false, showErrorMsg: false});
	     //window.event.preventDefault()
	     navigate(self.props.blok.thankyou_page.cached_url);
		  //console.log(self.props.blok.thankyou_page);
	  })
	  .catch(function(response) {
	     self.setState({showSpinner: false, showSuccessMsg: false, showErrorMsg: true});
	     console.log(response);
	  })
	}
   };
*/
	subscribeCallback = (childData) => {
		this.state.cookies.set('subscribe_widget_subscribed', 'true', { path: '/' });
		this.setState({displayCard: false, subscribed: true});
		
	}

	cancelCallback = (childData) => {
		this.closeModal();
	}

	hideWidget() {
		this.state.cookies.set('subscribe_widget_visible', 'false', { path: '/', expires: moment().add(2, 'days').toDate() });
		this.setState({'displayCard':false});
	}	

	closeModal() {
		$("#subscribe-modal").modal('hide');
	}	

	componentDidMount() {
        this.setState({displayCard: (this.state.cookies.get("subscribe_widget_subscribed") || (this.state.cookies.get("subscribe_widget_visible") == "false")) ? false : true});
    }

   render() { 

   	
	return (
		<div>
		<div className={'card fixed-bottom m-3 rounded bg-light shadow-lg' + (! this.state.displayCard && ' d-none')} style={this.state.cardStyle}>
			<div class="card-header ">
				<button type="button" className="close" aria-label="Close" onClick={this.hideWidget}>
			    	<span aria-hidden="true">&times;</span>
				</button>
			      <h5>Be in the mix</h5>
			    </div>
			    <div className="card-body">
					<p>Sign up for occasional updates about what I'm creating and doing.</p>
					<button className="btn btn-primary card-link" data-toggle="modal" data-target="#subscribe-modal">Send Me Updates</button>
			    </div>
		</div>
		{/*} Modal */}
		<div className="modal fade" id="subscribe-modal" tabindex="-1" role="dialog" ref={modal=> this.modal = modal} aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLabel">Subscribe</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
			      	{ this.state.subscribed &&
			      	<div className="container p-4">
			      		<div className="row">
			     	  		<div className="col-12 alert alert-success">Thanks for subscribing!</div>
			     		</div>
			     		<div className="row">
			     			<div className="col-12"><button className="btn float-right" onClick={this.closeModal}>back to browsing</button></div>
			     		</div>
			     	</div>
			     	}
			     	{ (! this.state.subscribed) &&
			         <SubscribeForm subscribeCallback={this.subscribeCallback} cancelCallback={this.cancelCallback}/>
			     	}
			        	
		      </div>
		      
		    </div>
		  </div>
		</div>
		</div>
	)
	
   }
}

export default SubscribeWidget

