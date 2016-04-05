import React          from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import SignIn         from '../../components/accounts/SignIn.jsx';

class SignInContainer extends React.Component {
  constructor( props ) {
    super( props );
    this.onCancel = this.onCancel.bind( this );
    this.validateEmail = this.validateEmail.bind( this );
    this.onSignIn = this.onSignIn.bind( this );
  }

  onCancel(e) {
    e.preventDefault();
    FlowRouter.go("/");
  }

  validateEmail( email ) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  onSignIn(email, password) {

    if ( this.validateEmail( email ) ) {

      Meteor.loginWithPassword( email, password, (error) => {
        if (error) {
          console.log(" error while logging in")
        } else {
          FlowRouter.go('/');
        }
      });

    } else {

    }
  }

  render() {
    return (
      <SignIn
        onSignIn={ this.onSignIn }
        onCancel={ this.onCancel }
      />
    );
  };
};

export default SignInContainer;
