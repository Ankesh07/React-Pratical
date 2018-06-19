  import React from 'react';
  import ReactDOM from 'react-dom';
  import To from './To';
  import ToDoForm from './ToDoForm';

  class HelloWorld extends React.Component{
    constructor(){
     super();
     this.changeStatus = this.changeStatus.bind(this);
     this.updateTask=this.updateTask.bind(this);
     this.addTask=this.addTask.bind(this);
     this.delTask=this.delTask.bind(this);
     this.editTask=this.editTask.bind(this);
      this.state={
  	task:[
    {name:'ank',
    comp:false},
  {name:'anku',
  comp:false}],
  currentTask:''
  }
  }
   changeStatus(index){
     var tasks=this.state.task;
     var task=tasks[index];
     task.comp= !task.comp;
     this.setState({
       task:tasks
     })
     console.log(task);
   }
   updateTask(newValue){
     this.setState({
       currentTask:newValue.target.value
     })
   }
   editTask(index,newValue){
     console.log(index,newValue);
     var tasks=this.state.task;
     var task=tasks[index];

     task['name']=newValue;
     this.setState({
       task:tasks
     })
   }
   addTask(event){
     event.preventDefault();
     let tasks = this.state.task;
     let currentTask=this.state.currentTask;
     tasks.push({
       name:currentTask,
       comp:false
     })
       this.setState({
       tasks,
       currentTask:''
     })
   }
   delTask(index){
     console.log(index);
     let task= this.state.task;
     task.splice(index,1);
     this.setState({
       task
     })
   }
   render(){
    return(
      <section>
      <ToDoForm currentTask={this.state.currentTask}
       updateTask={this.updateTask}
       addTask={this.addTask}/>
  <ul>
  {
    this.state.task.map((task,index) => {
    return <To key={index} clickHandler={this.changeStatus}
    index={index} details={task} delTask={this.delTask} editTask={this.editTask}/>

  }
  )}
  </ul>
  </section>
  )
  }
  }


  ReactDOM.render(<HelloWorld/>,document.getElementById('root'));
