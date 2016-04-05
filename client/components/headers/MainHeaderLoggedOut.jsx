import React from 'react';

const MainHeaderLoggedOut = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/">Profileactic</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/profile">Profile</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/signin">Sign In</a></li>
        </ul>
      </div>

    </div>
  </nav>
);

export default MainHeaderLoggedOut;
