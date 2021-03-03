import { Component } from 'react';
import AddTask from '../Components/AddTask';
import TaskList from '../Components/TaskList';

class TaskContainer extends Component {
    state={
        taskList: [{id: 1, title: 'task1'}, {id: 2, title: 'task2'}, {id: 3, title: 'task3'}]
    }

    addTask =  title => {
        const newTaskList = [...this.state.taskList];
        const newTask = {
            title,
            id:`${new Date()}`,
        };
        newTaskList.push(newTask);
        this.setState({ taskList: newTaskList});
    }



    render() { 
        const {taskList} = this.state;
        const {addTask} = this;
        return (
            <div>
                <AddTask addTask={addTask} />
                <TaskList taskList={taskList}/>

            </div>
        );
    }
}
 
export default TaskContainer;
