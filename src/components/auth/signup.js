import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions'

class Signup extends Component{
  handleFormSubmit(formProps){
    //call action create to sign up the user
    //we haven't made this yet
    this.props.signupUser(formProps)
  }

  renderAlert(){
    if (this.props.errorMessage) {
      //sign up error handling
      return(
        <div className="alert alert-danger">
          <strong>Sorry, </strong>{this.props.errorMessage}
        </div>
      );
    }
  }

  render(){
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
    return (

      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input className="form-control" {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>

        <fieldset className="form-group">
          <label>Password</label>
          <input className="form-control" {...password} />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>

        <fieldset className="form-group">
          <label>Confirm Password</label>
          <input className="form-control" {...passwordConfirm} />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>

    );
  }
}

function validate(formProps){
  const errors = {};

  if (!formProps.email){
    errors.email = 'Please enter email.';
  }

  if (!formProps.password){
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm){
    errors.passwordConfirm = 'Please confirm password.';
  }

  if (formProps.password !== formProps.passwordConfirm){
    errors.password = 'Passwords must match.';
  }
  console.log(formProps)
  return errors;
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signUp',
  fields: ['email', 'password', 'passwordConfirm'],
  validate: validate
}, mapStateToProps, actions)(Signup);
