import React from 'react';
import { Header } from './header.jsx';

export const Layout = ( { header, content } ) => (
  <div>
    <div>{ header }</div>
    <div>{ content }</div>
  </div>
);

export const Main = () => (
  <div>
    <h1>Main</h1>
  </div>
);

