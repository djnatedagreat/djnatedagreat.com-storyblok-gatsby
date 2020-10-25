import React from 'react'
//import Components from '../components.js';
import { navigate } from "gatsby"
import { Form, TextField, TextareaField, SubmitField, FormEventsEmitter} from 'react-components-form';
import Schema from 'form-schema-validation';

const contactFormSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  },
  message: {
      type: String,
      required: true
  }
});

const eventsEmitter = new FormEventsEmitter();
const submitModelListener = (model) => {
	    //do something with model when submit success
	console.l0g('event received');
};
eventsEmitter.listen('changeModel', submitModelListener);

//const ContactForm = (props) => {
class ContactForm extends React.Component {

   constructor(props) {
       super(props);
       this.formRef = React.createRef();
       this.state = {date: new Date(),
       		     showSuccessMsg: false,
       		     showErrorMsg: false,
       		     showSpinner: false};
   }

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
	     navigate("/"+self.props.blok.thankyou_page.cached_url);
		  //console.log(self.props.blok.thankyou_page);
	  })
	  .catch(function(response) {
	     self.setState({showSpinner: false, showSuccessMsg: false, showErrorMsg: true});
	     console.log(response);
	  })
	}
   };

   render() {
	return (
	<div className="container pt-5">
	<div className="row">
	{ this.state.showSuccessMsg &&
     	  <div className="col-xs-12 col-sm-6 alert alert-success">Thanks! Your message is on the way.</div>
	}
	{ this.state.showErrorMsg &&
     	  <div className="col-xs-12 col-sm-6 alert alert-danger">Something Went Wrong. We could not deliver your message.</div>
	}
	</div>
	<Form
	  onSubmit={this.submitMethod}
	  schema={contactFormSchema}
	  onError={(errors, data) => console.log('error', errors, data)}
	  ref={this.formRef}
	>
  	  <div className="row">
     	    <div className="col-xs-12 col-sm-6">
	    	<TextField name="name" label="Name *" type="text" 
		       	wrapperClassName="form-group" className="form-control" 
				errorStyles={{className: 'alert alert-danger'}}/>
	    	<TextField name="email" label="Email *" type="text" 
				wrapperClassName="form-group" className="form-control" 
				errorStyles={{className: 'alert alert-danger'}}/>
	    	<TextareaField name="message" label="Message *" 
				wrapperClassName="form-group" className="form-control" 
				errorStyles={{className: 'alert alert-danger'}}/>
     	    </div>
  	  </div>
	{ this.state.showSpinner &&
  	  <div className="row">
     	    <div className="col-xs-12 col-sm-6 mb-2">
		<div className="d-flex align-items-center">
		  <div className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></div>
		  &nbsp;&nbsp;<span>Sending your message... </span>
		</div>
     	    </div>
  	  </div>
	}
  	  <div className="row">
     	    <div className="col-xs-12 col-sm-6">
	    	<SubmitField value="Send Message" wrapperClassName="form-group" className="btn btn-primary"/>
     	    </div>
  	  </div>
        </Form>
	</div>
	)
   }
}

export default ContactForm
