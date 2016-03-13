import React from 'react';

export const Layout = ( { header, content } ) => (
  <div>
    <div>{ header }</div>
    <div>{ content }</div>
  </div>
);

export const Main = () => (
  <div className="container">
    <h1>Main</h1>
  </div>
);

