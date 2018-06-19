import React from 'react';

const ToDoForm= (props) =>{
  return (
    <form onSubmit={props.addTask}>
    <input type="text"
    value={props.currentTask}
    onChange={props.updateTask}
    />
    <button type="submit">Submit</button>
    </form>
  )
}
export default ToDoForm
