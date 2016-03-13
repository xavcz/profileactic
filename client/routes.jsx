import React from 'react';
import { mount } from 'react-mounter';
import { Layout, Main } from './app.jsx';

FlowRouter.route( '/', {
  action() {
    mount( Layout, {
      content: (<Main />)
    });
  }
});