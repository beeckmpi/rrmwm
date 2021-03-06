import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { callRemoveTodo, callEditTodo } from './TodoAsyncActions';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';
import Paper from 'material-ui/Paper';
import style from './todo.styl';

const Todo = (props) => {
  const { id, finished, message, dispatchCallRemoveTodo, dispatchCallEditTodo } = props;
  const handleRemove = () => {
    dispatchCallRemoveTodo(id);
  };
  const handleEdit = () => {
    dispatchCallEditTodo(id, !finished);
  };
  const finishedClass = () => {
    if (finished) {
      return 'todo-item todo-finished';
    }
    return 'todo-item';
  };
  return (
    <Paper styleName={finishedClass()} zDepth={1}>
      <Checkbox defaultChecked={finished || false} onCheck={handleEdit} label={message}/>
      <Delete onClick={handleRemove} styleName="delete" />
    </Paper>
  );
};

Todo.propTypes = {
  message: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  finished: React.PropTypes.bool,
  dispatchCallRemoveTodo: React.PropTypes.func.isRequired,
  dispatchCallEditTodo: React.PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  dispatchCallRemoveTodo: _id => dispatch(callRemoveTodo(_id)),
  dispatchCallEditTodo: (_id, finished) => dispatch(callEditTodo(_id, finished)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  cssModules(Todo, style, { allowMultiple: true }));
