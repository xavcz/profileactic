import React from 'react';

const SignIn = ({ cancel }) => (
  <div className="container">
    <div id="signin">

        <h4> Sign In</h4>

        <form role="form" onSubmit={ this.signIn }>
          <div className="form-group">
            <input type="email" ref="email" className="form-control" id="email" placeholder="Your Email Address"/>
          </div>
          <div className="form-group">
            <input type="password" ref="password"  className="form-control" id="pwd" placeholder="Your Password"/>
          </div>

          <button type="submit" className="btn btn-submit">Sign In</button>
          <button className="btn btn-cancel" onClick={ cancel }>Cancel</button>
        </form>

    </div>    
  </div>
);