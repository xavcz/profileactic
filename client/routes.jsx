import React                from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from './App.jsx';
import Main from './containers/Main.jsx';
import MainHeaderContainer from './containers/headers/MainHeaderContainer.jsx';

FlowRouter.route( '/', {
  name: 'Main',
  action() {
    mount( App, {
      header:   (<MainHeaderContainer />),
      content:  (<Main />)
    });
  }
});
