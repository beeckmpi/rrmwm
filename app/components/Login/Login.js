import React from 'react';
import cssModules from 'react-css-modules';
import Alert from 'react-s-alert';
import asteroid from '../../common/asteroid';
import style from './login.styl';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    asteroid.loginWithPassword({
      username: e.target.username.value,
      password: e.target.password.value,
    })
      .catch((error) => {
        Alert.error(error.message);
      });
  };
  const form = () => (
    <form onSubmit={handleLogin} styleName="login-form">
      <Paper styleName="paper">
        <div style={{display:"inline-block", marginLeft: "25%"}}>
          <div>
            <TextField type="text" name="username" floatingLabelText="Username" />
          </div>
          <div>
            <TextField type="password" name="password" floatingLabelText="Password" />
          </div>
          <div>
            <RaisedButton secondary={true} type="submit" label="Login" />
          </div>
        </div>
        <div styleName="help">
          <h3>Info</h3>
          <div>use as Username: admin <br /> use as Password: pass</div>
        </div>
      </Paper>
    </form>
  );
  return <div>{form()}</div>;
};

export default cssModules(Login, style);
