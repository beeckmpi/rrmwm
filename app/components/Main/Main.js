import React from 'react';
import cssModules from 'react-css-modules';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import Alert from 'react-s-alert';
import style from './main.styl';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Main = (props) => {
  const { children } = props;
  return (
    <MuiThemeProvider>
      <div>
        <section styleName="section">
          <div styleName="container">
            {children}
          </div>
        </section>
        <Alert position="top-right" effect="jelly" />
      </div>
    </MuiThemeProvider>
  );
};

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default cssModules(Main, style);
