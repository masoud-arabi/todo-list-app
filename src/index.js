import ReactDOM from 'react-dom';
import TaskContainer from './Containers/TaskContainer'


function App(){
  return(
    <div className='App'>
        <TaskContainer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


