import React from 'react';
import { mount } from 'react-mounter';
import { Layout, Main } from './app.jsx';
import { MainHeader } from './containers/main_header';

FlowRouter.route( '/', {
  name: 'Main',
  action() {
    mount( Layout, {
      header:   (<MainHeader />),
      content:  (<Main />)
    });
  }
});