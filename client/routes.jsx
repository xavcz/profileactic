import React                from 'react';
import { FlowRouter }       from 'meteor/kadira:flow-router';
import { mount }            from 'react-mounter';

import App                  from './App.jsx';
import Main                 from './containers/Main.jsx';
import MainHeaderContainer  from './containers/headers/MainHeaderContainer.jsx';
import SignInContainer      from './containers/accounts/SignInContainer.jsx';
import SignUpContainer      from './containers/accounts/SignUpContainer.jsx';
import ProfileContainer     from '/client/containers/profiles/ProfileContainer.jsx';
import MyProfileContainer   from '/imports/ui/myprofile/MyProfileContainer.jsx';
import NotFound             from './NotFound.jsx';

FlowRouter.route( '/', {
  name: 'Home',
  action() {
    mount( App, {
      header:   (<MainHeaderContainer />),
      content:  (<Main />)
    });
  }
});

FlowRouter.route( '/myprofile', {
  name: 'MyProfile',
  action( params ) {
    mount( App, {
      header:   (<MainHeaderContainer />),
      content:  (<MyProfileContainer />)
    });
  }
});

FlowRouter.route( '/profiles/:userId', {
  name: 'Home',
  action( params ) {
    mount( App, {
      header:   (<MainHeaderContainer />),
      content:  (<ProfileContainer userId={ params.userId }/>)
    });
  }
});

FlowRouter.notFound = {
  name: 'NotFound',
  action() {
    mount( App, {
      header:   (<MainHeaderContainer />),
      content:  (<NotFound />)
    });
  }
};

FlowRouter.route('/signin',{
  name: 'SignIn',
  action(params) {
    mount( App, {
      header:   (<MainHeaderContainer />),
      content:  (<SignInContainer />)
    });
  }
});

FlowRouter.route('/signup',{
  name: 'SignUp',
  action(params) {
    mount( App, {
      header:   (<MainHeaderContainer />),
      content:  (<SignUpContainer />)
    });
  }
});
