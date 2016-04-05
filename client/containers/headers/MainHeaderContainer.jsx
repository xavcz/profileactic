import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import MainHeaderLoggedIn from '../../components/headers/MainHeaderLoggedIn.jsx';
import MainHeaderLoggedOut from '../../components/headers/MainHeaderLoggedOut.jsx'

class MainHeaderContainer extends React.Component {
  constructor( props ) {
    super( props );
    this.onLogOut = this.onLogOut.bind( this );
  }

  onLogOut() {
    Meteor.logout( ( error, success ) => {
      if (error) console.log(error);
      console.log('logging out');
      FlowRouter.go("/");
      FlowRouter.reload();
    });
  }

  render() {
    if (Meteor.user()) {
      return <MainHeaderLoggedIn logOut={ this.onLogOut } />;
    } else {
      return <MainHeaderLoggedOut />
    }
  }
};

export default MainHeaderContainer;
