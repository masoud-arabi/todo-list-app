import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({taskList})=>{
    return(
        <ul>
            {taskList.map(task =>(
                <TaskItem task={task} key={task.id}/>
            ))}
        </ul>
    );
}

export default TaskList;