import React                  from 'react';
import { FlowRouter }         from 'meteor/kadira:flow-router';
import SignUp                 from '/imports/ui/accounts/SignUp.jsx';
import { createProfile }      from '/imports/api/myprofile/methods';

class SignUpContainer extends React.Component {
  constructor( props ) {
    super( props );
    this.onCancel = this.onCancel.bind( this );
    this.onSignUp = this.onSignUp.bind( this );
  }

  onCancel() {
    FlowRouter.go("/")
  }

  onSignUp( email, password ) {
    const user = {
      email:    email.value.trim(),
      password: password.value.trim()
    };

    Accounts.createUser( user, ( err, res ) => {
      if ( err ) {
        console.log(err);
      } else {
        FlowRouter.go('/');
      }
    });



  }

  render() {
    return (
      <SignUp
        onSignUp={ this.onSignUp }
        onCancel={ this.onCancel }
      />
    );
  }

};

export default SignUpContainer;
