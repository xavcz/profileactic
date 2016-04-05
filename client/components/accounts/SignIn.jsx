import React from 'react';

class SignIn extends React.Component {

  render() {

    const { onSignIn, onCancel } = this.props;

    return (
      <div className="container">

        <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">

          <form role="form" onSubmit={ (e) => {
              e.preventDefault();
              onSignIn( this.refs.email.value.trim(), this.refs.password.value.trim() );
            }}
          >
            <div className="form-group">
              <input
                type="email"
                ref="email"
                className="form-control"
                placeholder="Your Email Address"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                ref="password"
                className="form-control"
                placeholder="Your Password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-submit btn-rocket"
              onClick={ (e) => {
                e.preventDefault();
                onSignIn(this.refs.email.value.trim(), this.refs.password.value.trim());
              }}
            >
              Sign In
            </button>

            <button
              className="btn btn-rocket btn-submit-cancel"
              onClick={ onCancel }
            >
              Cancel
            </button>
          </form>

        </div>

      </div>
    )
  }
};

export default SignIn;
