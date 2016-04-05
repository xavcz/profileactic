import React from 'react';

class SignUp extends React.Component {
  render() {

    const { onSignUp, onCancel } = this.props;
    
    return (
      <div className="container">
      <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">

        <form role="form" onSubmit={ (e) => {
            e.preventDefault();
            onSignUp( this.refs.email, this.refs.password);
          }}
        >
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email Address"
              ref="email"
            />

          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Your Password"
              ref="password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-submit btn-rocket"
            onClick={ (e) => {
                e.preventDefault();
                onSignUp( this.refs.email, this.refs.password);
              }}
          >
            Register
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
    );
  }
}

export default SignUp;
