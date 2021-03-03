import React, { Component } from 'react'

class AddTask extends Component {
    state = { 
        taskTitle: ''
     };

    OnChange = e => this.setState({taskTitle: e.target.value});

    OnAddTask = () =>{
        const {addTask} = this.props;
        const { taskTitle } = this.state;
        addTask(taskTitle);
        this.setState({ taskTitle: ''});

    };

    render() { 
        const { taskTitle } = this.state;
        const {OnChange, OnAddTask } = this;
        return ( 
            <div>
                <input type='text' placeholder='task title' value={taskTitle} onChange={OnChange}/>
                <button disabled={!taskTitle} onClick={OnAddTask }>add task</button>
            </div>
         );
    }
}
 
export default AddTask;