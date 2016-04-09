import React                  from 'react';
import { FlowRouter }         from 'meteor/kadira:flow-router';
import SignUp                 from '/client/components/accounts/SignUp.jsx';
import { userProfilesCreate } from '/imports/api/myprofile/server/methods';

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

    Accounts.createUser( user, ( error, result ) => {
      if ( error ) {
        console.log( "Error while registering a new user." );
      } else {
        FlowRouter.go('/');
      }
    });

    userProfilesCreate.call({}, (err, res) => {
      if (err) {
        console.log('error creating profile for a new user.');
      } else {
        console.log('Profile for user created successfully.');
      }
    })

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
