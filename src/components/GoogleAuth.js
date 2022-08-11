import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
        window.gapi.client
          .init({
            clientId:
              "797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com",
            scope: "email",
            plugin_name: "streamy",
          }) 
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <Button onClick={this.onSignOutClick} variant="contained">
          <i className="google icon" />
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button onClick={this.onSignInClick} variant="outlined" color="error">
        <GoogleIcon /> &nbsp; Sign In with Google
        </Button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
