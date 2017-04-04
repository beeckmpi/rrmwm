import React from 'react';
import cssModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import style from './home.styl';
import Todo from '../Todo/Todo';
import Login from '../Login/Login';
import asteroid from '../../common/asteroid';

import { callAddTodo } from '../../components/Todo/TodoAsyncActions';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const Home = (props) => {
  const { todos, dispatchCallAddTodo, user } = props;
  const handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      const elem = e.target;
      e.preventDefault();
      if (elem.value) {
        dispatchCallAddTodo(elem.value);
        elem.value = '';
      }
    }
  };
  const handleLogout = () => {
    asteroid.logout();
  };
  const home = () => {
    if (user && user.username) {
      return (
        <div styleName="todo-wrapper">
          <div styleName="logout">
            {user.username} <RaisedButton onClick={handleLogout} secondary={true} styleName="logout-button" label="logout" />
          </div>
          <Paper>
            <TextField
              type="text"
              styleName="add-todo-input"
              placeholder="Add todo item ..."
              floatingLabelText="Add todo item"
              onKeyPress={handleAddTodo}
              id="textfield"
              style={{width:"auto", minWidth:"95%", padding: "0px 15px"}}
            >
            </TextField>
          </Paper>
          <div style={{padding: "10px 0px"}}>
            {todos.map((t, i) =>
            <Todo id={t._id} message={t.message} finished={t.finished} key={i} />)}
          </div>
        </div>
      );
    }
    return <Login />;
  };
  return <div>{home()}</div>;
};

Home.propTypes = {
  todos: React.PropTypes.array.isRequired,
  dispatchCallAddTodo: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
};

const mapStateToProps = state => ({
  todos: state.todos,
  user: state.user,
});
const mapDispatchToProps = dispatch => ({
  dispatchCallAddTodo: data => dispatch(callAddTodo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Home, style));
