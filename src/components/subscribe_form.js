import React from 'react';

class SubscribeForm extends React.Component {

   constructor(props) {
       super(props);
       this.formRef = React.createRef();
       this.state = {date: new Date(),
       		     showErrorMsg: false,
       		     showSpinner: false,
       		 	 errorMsg: 'Something Went Wrong. Sorry, your subscription failed.',
       		 	 actionUrl: 'https://t5tg8rk8t8.execute-api.us-west-2.amazonaws.com/default/natedagreat/contact',
       		 	 subscribed: false
       		 	};
 		this.submitForm = this.submitForm.bind(this);
 		this.cancel = this.cancelForm.bind(this);
 		this.firstNameInput = React.createRef();
 		this.lastNameInput = React.createRef();
 		this.emailInput = React.createRef();
 		this.optInInput = React.createRef();
   }

	submitForm(event) {

		event.preventDefault();

		this.setState({showErrorMsg: false, showSpinner: false});
   		if(! this.firstNameInput.current.value) {
   			this.setState({errorMsg: 'First Name is a required field.', showErrorMsg: true});
   			return;
   		}
   		if(! this.emailInput.current.value) {
   			this.setState({errorMsg: 'Email is a required field.', showErrorMsg: true});
   			return;
   		}
   		if(! this.optInInput.current.checked) {
   			this.setState({errorMsg: 'Please check the checkbox to receive updates.', showErrorMsg: true});
   			return;
   		}

    	this.setState({showSpinner: true});
		
		let headers = new Headers({
		   'Content-Type': 'application/json',
		   "x-api-key": "NMjjGmTrGV52pxBYI40Bj1NiA4lWDWOP6JjLtlaG"
		});
		let data =  {
		  	email: this.emailInput.current.value,
		  	name: this.firstNameInput.current.value + ' ' + this.lastNameInput.current.value,
		  	message: 'please subscribe me to your newsletter.'
		};
		let params = {
		  method: "POST",
		  headers: headers,
		  body: JSON.stringify(data) 
		};
		if (this.state.actionUrl) {
		  var self = this;
		  fetch(this.state.actionUrl, params)
		  .then(function(response) {
		     self.setState({showSpinner: false, showErrorMsg: false, subscribed: true});
		     self.props.subscribeCallback();
		     //window.event.preventDefault()
		     //navigate(self.props.blok.thankyou_page.cached_url);
			  //console.log(self.props.blok.thankyou_page);
		  })
		  .catch(function(response) {
		     self.setState({showSpinner: false, showErrorMsg: true});
		     //console.log(response);
		  })
		}
		
	}

	cancelForm(event) {
		this.props.cancelCallback();
	}

	render() {
		return (
			<div className="container p-4">
				
				{ this.state.showErrorMsg &&
					<div className="row">
			     	  <div className="col-12 alert alert-danger">{this.state.errorMsg}</div>
			     	</div>
				}
			
				{ (! this.state.subscribed) &&
				<div className="row">
			    	<div className="col-12">
						<form onSubmit={this.submitForm}>
						  <div className="form-group">
						    <label for="InputFirstName">First Name *</label>
						    <input type="text" name="first_name" className="form-control" id="InputFirstName" ref={this.firstNameInput}/>
						  </div>
						  <div className="form-group">
						    <label for="InputFirstName">Last Name</label>
						    <input type="text" name="last_name" className="form-control" id="InputLastName" ref={this.lastNameInput}/>
						  </div>
						  <div className="form-group">
						    <label for="InputEmail1">E-mail address *</label>
						    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" required ref={this.emailInput}/>
						    <small id="emailHelp" className="form-text text-muted">I don't share your email with anyone else.</small>
						  </div>
						  <div className="form-group form-check">
						    <input type="checkbox" className="form-check-input" id="Optin" ref={this.optInInput} value="optin"/>
						    <label className="form-check-label" for="Optin">Yes, I want to receive E-mail updates from DJ Nate Da Great</label>
						  </div>
						  { this.state.showSpinner &&
		  					<div className="d-flex align-items-center p-1">
				  				<div className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></div>
				 				 &nbsp;&nbsp;<span>Subscribing you... </span>
								
		  	  				</div>
							}
						  <button type="submit" className="btn btn-primary">Send Me Updates</button>
						  <button className="btn float-right" onClick={this.cancel}>Nevermind</button>
						</form>
					</div>
		      	</div>
		      	}
		    </div>	
		)
	}
}

export default SubscribeForm
